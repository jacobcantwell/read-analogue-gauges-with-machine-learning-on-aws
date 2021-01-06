---
title: "Read Analogue Gauges With Computer Vision"
chapter: true
weight: 1
---

## Read Analogue Gauges With Computer Vision

![image](/images/analogue-gauge.jpg)

[View a simulated pressure guage](guage/?bp=100)

## Welcome

Analogue pointer-type dials are widely applied in many industries such as Oil & Gas. Visual inspection to remote oil well sites is necessary to obtain readings from analog gauges. This means a human operator must travel to the gauge’s location, read its current value, and log that value to enable the data to be used elsewhere. This is a time consuming and expensive process and it is prone to human errors. An alternative to the manual readings is to record a video of the gauge and analyze the pressure variations using computer vision techniques. This project shows how to use AWS IoT services to read analogue gauges remotely.

In this workshop, you will get a hands-on introduction to Machine Learning.

## Workshop summary

* Virtual - Send mock AWS analogue telemetry to AWS IoT
* Virtual - Build real time analogue guages Kibana
* Virtual or Real - Take screen captures of the analog guages for training data
* Deploy a sample model that can detect a Kibana guage on a Deeplens camera
* Label the images with Amazon Sagemaker ground truth
* Build a custom model with Sagemaker that can read the guage values
* Invoke an endpoint client
* View the real time dashboard with dial data

## Project Ideation

* Expand the flow to include other items or dial types
