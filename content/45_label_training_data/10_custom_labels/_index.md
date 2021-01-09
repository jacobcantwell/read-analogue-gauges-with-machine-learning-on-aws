+++
title = "x.1 Custom labels"
chapter = false
weight = 10
+++

## Creating your project

1. In the AWS management console, search for *Amazon Rekognition*.
2. On the Amazon Rekognition console, choose *Custom Labels*.
3. Choose *Get Started*.
4. For *Project name*, enter *GaugeDetection*.
5. Choose *Create project*

You can also create a project on the Projects page. You can access the Projects page via the left navigation pane.

## Creating your dataset

To create your analogue gauge detection model, you first need to create a dataset to train the model with. For this workshop, our dataset is composed of images you have taken of the analogue gauge.

To create your dataset:

1. Choose *Create dataset*.
2. For *Dataset name*, enter *GaugeImages*.
3. Select *Upload images from your computer*.
4. Choose *Add Images*.
5. Upload your images. You can always add more images later.

## Labeling the images with bounding boxes

You’re now ready to label the images by applying bounding boxes on all images with analogue gauges.

Add *PressureGauge* as a label to your dataset via the labels list on the left side of the gallery.

Apply the label to the pressure gauges in the images by selecting all the images with a pressure gauge and choosing Draw Bounding Box.

You can use the Shift key to automatically select multiple images between the first and last selected images.

Make sure to draw a bounding box that covers the pressure gauge as tightly as possible.

You will need to draw a bounding box on at least 30 images.

## Training your model

After you label your images, you’re ready to train your model.

As part of model training, Amazon Rekognition Custom Labels requires a labeled test dataset. Amazon Rekognition Custom Labels uses the test dataset to verify how well your trained model predicts the correct labels and generate evaluation metrics. Images in the test dataset are not used to train your model and should represent the same types of images you will use your model to analyze.

1. Choose *Train Model*.
2. For *Choose project*, choose your *GaugeDetection* project.
3. For *Choose training dataset*, choose your *GaugeImages* dataset.
4. For *Create test set*, choose *Split training dataset*. Amazon Rekognition will hold back 20% of the images for testing and use the remaining 80% of the images to train the model.

{{% notice info %}}
Our model took approximately one hour to train. The training time required for your model depends on many factors, including the number of images provided in the dataset and the complexity of the model.
{{% /notice %}}

When training is complete, Amazon Rekognition Custom Labels outputs key quality metrics including F1 score, precision, recall, and the assumed threshold for each label. For more information about metrics, see [Metrics for Evaluating Your Model](https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/tr-metrics-use.html).

You can also choose *View Test Results* to see how our model performed on each test image. The following screenshot shows an example of a correctly identified image of pressure gauge during the model testing (true positive).

## Testing your model

Your custom gauge detection model is now ready for use. Amazon Rekognition Custom Labels provides the API calls for starting, using and stopping your model; you don’t need to manage any infrastructure.

The following screenshot shows the API calls for using the model.

In the next steps we will show testing the model.
