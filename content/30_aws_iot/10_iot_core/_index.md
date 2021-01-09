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

![Custom endpoint](10_iot_core/images/aws-iot-endpoint.png "Custom endpoint")

## Create an IAM user

* Create an IAM user with the role *AWSIoTDataAccess*
* Record the access key and secret access key

## Configure gauge page

In a web browser, open [Analogue gauge builder](https://aws-computer-vision.jacobcantwell.com/gauge/)

Open the top right menu and start setting the AWS IoT access details.

1. Set AWS region, *us-east-1*
2. Set Custom endpoint from above
3. Set AWS access key ID
4. Set AWS secret access key ID
5. Select **Connect to AWS IoT**

You should see a message *AWS IoT Connected*.

Close the menu.

## AWS MQTT test client

Open the AWS Management Console and browse to AWS IoT. Open the windows of the gauge and AWS IoT so you can see them next to each other.

MQTT allows two way communication so you can both send and recieve messages from AWS IoT.

### Subscribe to a topic

Under *Subscriptions*, select *Subscribe to a topic*.

Subscribe to the topic *gauges/gauge-alpha/status/pressure/psi*

In the gauge page, change the pressure. You should see that the virtual gauge can now publish to AWS IoT.

### Publish to a topic

Under *Subscriptions*, select *Publish to a topic*.

Set the topic to publish to *gauges/gauge-alpha/set/pressure/psi*

Set a number to send to the gauge between 10 and 230.

Click the *Publish to topic* button.

You should see that the pressure gauge has changed to match the value that you sent.
