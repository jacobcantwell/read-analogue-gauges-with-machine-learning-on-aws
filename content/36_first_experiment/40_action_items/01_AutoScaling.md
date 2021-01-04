+++
title = "2.5.1 Auto Scaling"
chapter = true
weight = 01
+++

# 2.5.1 Auto Scaling
## Remediation: Set up Auto Scaling

Go to the [AWS Console](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Home:) and select EC2 from Services.

![AWS Auto Scaling groups](/images/aws_auto_scaling.png)

On the left navigation bar, select **Auto Scaling Groups.**

![AWS Auto Scaling groups](/images/aws_automatic_scaling.png) 

Each Cluster gets its own Auto Scaling Group. Go ahead and check off the one you need. In the next section, select **Automatic scaling**, followed by **Add Policy.**

For **"Policy type"** select **"Simple scaling"**

For Scaling Policy name, feel free to call it **`ScaleUp`**.

![AWS Auto Scaling groups](/images/aws_create_scaling_policy_prework.png) 

We are going to need to setup a CloudWatch Alarm, go ahead and select **"Create a CloudWatch alarm"**.
