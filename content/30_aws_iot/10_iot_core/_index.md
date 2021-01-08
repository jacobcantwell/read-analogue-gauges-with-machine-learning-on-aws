+++
title = "1.x IoT core"
chapter = false
weight = 20
+++

Discuss AWS IoT Core integration

* Register device
* Tips for training data

### Endpoint

Open AWS IoT. In the left menu bar, select **Settings**.

The custom endpoint allows you to connect IoT devices to AWS IoT. This is also an important property to insert when using an MQTT client or the AWS IoT Device SDK.

The endpoint has the suffix *.iot.us-east-1.amazonaws.com*

Copy the Endpoint value to your local computer.

![Custom endpoint](10_labeling_job/images/aws-iot-endpoint.png "Custom endpoint")

## Create an IAM user

* Create an IAM user with the role *AWSIoTDataAccess*
* Record the access key and secret access key

## Configure Guage page

In a web browser, open [Analogue Guage Builder](https://aws-computer-vision.jacobcantwell.com/guage/)

Open the top right menu and start setting the AWS IoT access details.

* Set AWS region, *us-east-1*
* Set Custom endpoint from above
* Set AWS access key ID
* Set AWS secret access key ID
* Select **Connect to AWS IoT**

You should see a message *AWS IoT Connected*.

Close the menu.

## AWS MQTT test client

Open the AWS Management Console and browse to AWS IoT. Open the windows of the guage and AWS IoT so you can see them next to each other.

MQTT allows two way communication so you can both send and recieve messages from AWS IoT.

### Subscribe to a topic

Under *Subscriptions*, select *Subscribe to a topic*.

Subscribe to the topic *guages/guage-alpha/status/pressure/psi*

In the guage page, change the pressure. You should see that the virtual guage can now publish to AWS IoT.

### Publish to a topic

Under *Subscriptions*, select *Publish to a topic*.

Set the topic to publish to *guages/guage-alpha/set/pressure/psi*

Set a number to send to the guage between 10 and 230.

Click the *Publish to topic* button.

You should see that the pressure guage has changed to match the value that you sent.
