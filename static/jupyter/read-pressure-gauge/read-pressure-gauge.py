#!/usr/bin/env python
# coding: utf-8

# In[ ]:


# get S3 image details
MY_BUCKET = 'custom-labels-console-us-east-1-67a9361d65'
MY_IMAGE_KEY = 'testing-images/gauge-pressure-100.png'
MY_MODEL_ARN = 'arn:aws:rekognition:us-east-1:158287123688:project/PressureGaugeDetectionv2/version/PressureGaugeDetectionv2.2021-01-13T21.19.23/1610533163713'


# In[108]:


import boto3
import io
from PIL import Image as ImageB, ImageDraw, ExifTags, ImageColor, ImageFont

# boto3 = boto3.session.Session(profile_name='cv',region_name='us-east-1') # if running locally use a profile
boto3 = boto3.session.Session(region_name='us-east-1') # if running in SageMaker
s3_client = boto3.client('s3')
rekognition_client = boto3.client('rekognition')

# location of the image to process
s3_bucket = MY_BUCKET
s3_key = MY_IMAGE_KEY

# file_key_prefix = Path(s3_key).stem
# file_key_suffix = Path(s3_key).suffix

originalImageFileName = '%s%s'%(file_key_prefix,file_key_suffix)
print('open s3 image s3://%s/%s'%(MY_BUCKET, MY_IMAGE_KEY))
s3_object = s3_client.Object(MY_BUCKET, MY_IMAGE_KEY)
s3_response = s3_object.get()
stream = io.BytesIO(s3_response['Body'].read())
image = ImageB.open(stream)
print('opened s3://%s/%s'%(MY_BUCKET, MY_IMAGE_KEY))

# display original image
# display(Image(filename=originalImageFileName, width=600))
display(image, width=400)


# ### Call Rekognition API
# 
# Call the Rekognition API detect_custom_labels.

# In[109]:


# Call DetectCustomLabels

detect_custom_labels_response = rekognition_client.detect_custom_labels(
    Image={'S3Object': {'Bucket': MY_BUCKET, 'Name': MY_IMAGE_KEY}},
    MinConfidence=min_confidence,
    ProjectVersionArn=model
)
print(len(detect_custom_labels_response['CustomLabels']), ' custom labels were detected.')
print('Rekognition full JSON response: ', detect_custom_labels_response)


# ### Draw bounding boxes
# 
# The code below draws box around each custom label and adds a text label.

# In[ ]:


# get image details
imgWidth, imgHeight = image.size
draw = ImageDraw.Draw(image)

# calculate and display bounding boxes for each detected custom label
print('Detected custom labels for ' + MY_IMAGE_KEY +
      ' with dimensions width=' + str(imgWidth) + ' and height=' + str(imgHeight))

for customLabel in detect_custom_labels_response['CustomLabels']:
    print('Label ' + str(customLabel['Name']))
    print('Confidence ' + str(customLabel['Confidence']))
    if 'Geometry' in customLabel:
        box = customLabel['Geometry']['BoundingBox']
        left = imgWidth * box['Left']
        top = imgHeight * box['Top']
        width = imgWidth * box['Width']
        height = imgHeight * box['Height']
        # fnt = ImageFont.truetype('/Library/Fonts/Arial.ttf', 50)
        # draw.text((left,top), customLabel['Name'], fill='#00d400', font=fnt)
        draw.text((left,top), customLabel['Name'], fill='#00d400')
        print('Left: ' + '{0:.0f}'.format(left))
        print('Top: ' + '{0:.0f}'.format(top))
        print('Label Width: ' + "{0:.0f}".format(width))
        print('Label Height: ' + "{0:.0f}".format(height))
        points = (
            (left,top),
            (left + width, top),
            (left + width, top + height),
            (left , top + height),
            (left, top))
        draw.line(points, fill='#00d400', width=5)

display(image)

