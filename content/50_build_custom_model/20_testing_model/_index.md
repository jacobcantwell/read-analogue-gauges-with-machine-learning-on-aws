+++
title = "Start the model"
chapter = false
weight = 20
+++

You can now start and stop the model, and analyze custom labels in new images.

* In the *Use your model* section, open *API Code*

![Use your model](20_testing_model/images/test-model-1.png "Use your model")

* Copy the *AWS CLI command* for *Start model*.
* Paste and run this command in the Cloud9 IDE terminal.
* You should get a response of *{ "Status" = "STARTING" }*

![Start model code](20_testing_model/images/test-model-2.png "Start model code")

* Return to your model in the AWS management console.
* Select your Model name instance which you just trained and choose *Model details*
* Wait until *Status* changes from *STARTING* to *RUNNING*

![Model status](20_testing_model/images/test-model-3.png "Model status")

## Upload gauge test images to S3

* In Amazon S3, open the *custom-labels-console-us-east-1-67a9361d65* prefixed S3 bucket.
* Create a new folder *testing-images*.
* Upload some new gauge images to the new *testing-images* folder.
* Record a key name of the image.
