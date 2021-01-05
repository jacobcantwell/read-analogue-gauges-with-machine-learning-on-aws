---
title: "Read Analogue Gauges With Computer Vision"
chapter: true
weight: 1
---

# Read Analogue Gauges With Computer Vision

![image](/images/analogue-gauge.jpg)

## Welcome

Analogue pointer-type dials are widely applied in many industries such as Oil & Gas. Visual inspection to remote oil well sites is necessary to obtain readings from analog gauges. This means a human operator must travel to the gauge’s location, read its current value, and log that value to enable the data to be used elsewhere. This is a time consuming and expensive process and it is prone to human errors. An alternative to the manual readings is to record a video of the gauge and analyze the pressure variations using computer vision techniques. This project shows how to use AWS IoT services to read analogue gauges remotely.

In this workshop, you will get a hands-on introduction to Chaos Engineering by assuming the role of Mystical Mysfit’s newest site reliability engineer. Mythical Mysfits is a fictitious company that started off with their famous “Hello world” product and evolved into being a world leader in the unicorn socks rental market.
As Mystical Mysfit’s sole SRE, you’ll be responsible for keeping container-based microservices architecture up and running during Mystical Mysfit’s busiest “two days” of the year.

On “day one,” you’ll start by setting up the infrastructure for the online store. You’ll then be tasked with creating dashboards and alerts to track the health of the system as the first orders start rolling in.

Before “day two,” you’ll have the opportunity to run Chaos Engineering experiments on your environment to ensure that what you set up is working as expected. You’ll also learn how to get ahead of potential issues before the store opens again for “day two.”

You have 2 hours to ramp up and take over the infrastructure team. It might sound hard but to quote the CEO of the company: " How hard can it be to keep a system up for 2 days?! I'm not a technical guy, but I don't know what's the big deal!"

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
