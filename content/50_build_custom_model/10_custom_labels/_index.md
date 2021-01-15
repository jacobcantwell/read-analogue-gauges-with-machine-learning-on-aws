+++
title = "Amazon Rekognition Custom Labels"
chapter = false
weight = 10
+++

## Creating your project

In the first instance of setting up Amazon Rekognition will create

1. In the AWS management console, search for *Amazon Rekognition*.
2. On the Amazon Rekognition console, choose **Use Custom Labels**.
3. Choose **Get started**.
4. If you see a *First time set up* message, choose **Create S3 bucket**. Record the S3 bucket name for future reference.
5. For *Project name*, enter *GaugeDetection*.
6. Choose **Create project**

![Create project](10_custom_labels/images/create-custom-labels-1.png "Create project")

You can also create a project on the Projects page. You can access the Projects page via the left navigation pane.

## Creating your dataset

To create your analogue gauge detection model, you first need to create a dataset to train the model with. For this workshop, our dataset is composed of images you have taken of the analogue gauge.

To create your dataset:

1. Choose **Create dataset**.
2. For *Dataset name*, enter *GaugeImages*.
3. Select *Import images labeled by Amazon SageMaker Ground Truth*.
4. For *.manifest file location*, enter the S3 bucket location of your .manifest file. e.g. *s3://custom-labels-console-us-east-1-67a9361d65/gauge-pressure/gauge-pressure.manifest*
5. Choose  **Submit**.

![Dataset details](10_custom_labels/images/create-dataset-1.png "Dataset details")

## Label new images with bounding boxes

You can now review your images to verify your dataset. Add any missing labels, edit labels for images that are labeled incorrectly, and add images and edit labels.

You can label the images by applying bounding boxes on all images with analogue gauges.

* Choose *Start Labeling*.

![Start Labeling](10_custom_labels/images/image-labeling-1.png "Start Labeling")

### Add images

1. Choose *+Add images*.
2. Drag and drop up to 30 images of your images from the Analogue Builder site.
3. Choose **Upload Images**.

![Add images](10_custom_labels/images/image-labeling-2.png "Add images")

{{% notice info %}}
In this workshop we are adding custom labels for analogue gauges. Read the [AWS blog](https://aws.amazon.com/blogs/machine-learning/training-a-custom-single-class-object-detection-model-with-amazon-rekognition-custom-labels/) for training other objects with Amazon Rekognition Custom Labels.
{{% /notice %}}

### Draw bounding box

Apply the label to the pressure gauges in the images by selecting all the images with a pressure gauge and choosing *Draw bounding box*.

You can use the Shift key to automatically select multiple images between the first and last selected images.

* In the *Filter by labels* menu, select *Unlabeled*
* Check your images that you want to label.
* Choose **Draw bounding box**

![Filter by labels](10_custom_labels/images/image-labeling-5.png "Filter by labels")

* Select the *GAUGE_PRESSURE* label.
* Draw a bounding box that covers the pressure gauge as tightly as possible.
* Choose *Next* to label the next image.
* Choose **Done** to finish.
* The console will return to the image gallery page.
* Choose **Save changes**.

![Draw bounding box](10_custom_labels/images/image-labeling-6.png "Draw bounding box")

## Train model

After you label your images, you are ready to train your model.

As part of model training, Amazon Rekognition Custom Labels requires a labeled test dataset. Amazon Rekognition Custom Labels uses the test dataset to verify how well your trained model predicts the correct labels and generate evaluation metrics. Images in the test dataset are not used to train your model and should represent the same types of images you will use your model to analyze.

1. Choose **Projects**.
2. Choose your project **GaugeDetection**.
3. Choose *Train new model*.
![Train new model](10_custom_labels/images/start-training-1.png "Train new model")

4. For *Choose project*, choose your *GaugeDetection* project.
5. For *Choose training dataset*, choose your *GaugeImages* dataset.
6. For *Create test set*, choose *Split training dataset*. Amazon Rekognition will hold back 20% of the images for testing and use the remaining 80% of the images to train the model.

![Training details](10_custom_labels/images/start-training-2.png "Training details")

{{% notice info %}}
Our model took approximately 90 minutes to train. The training time required for your model depends on many factors, including the number of images provided in the dataset and the complexity of the model.
{{% /notice %}}

When training is complete, Amazon Rekognition Custom Labels outputs key quality metrics including F1 score, precision, recall, and the assumed threshold for each label. For more information about metrics, see [Metrics for Evaluating Your Model](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/tr-metrics-use.html).

You can also choose *View Test Results* to see how our model performed on each test image. The following screenshot shows an example of a correctly identified image of pressure gauge during the model testing (true positive).

## Testing your model

Your custom gauge detection model is now ready for use. Amazon Rekognition Custom Labels provides the API calls for starting, using and stopping your model; you don’t need to manage any infrastructure.

In the next steps we will show testing the model.
