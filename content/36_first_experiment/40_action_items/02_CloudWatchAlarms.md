+++
title = "2.5.2 CloudWatch Alarms"
chapter = true
weight = 02
+++

# 2.5.2 CloudWatch Alarms
## Set up Auto Scaling: Configure Cloudwatch

We need to find the metric we want to alarm for first. Select **"Select Metric"**, **"Container Insights"**, followed by **"ClusterName, InstanceId, NodeName"**.  Locate `node_cpu_utilization` on any of the EC2 instances and press **"Select Metric".**  

![Container Insights Results](/images/aws_select_cpu_utilization.png)

 Now we get to specify metrics and conditions. Under the first section, just change the period to be **"1 minute".**

![Container Insights Results](/images/aws_period_1min.png)

Let's move to **"Conditions"**:

1. Leave **Static** selected.
2. Choose **"Greater"** 
3. For the box of threshold value, type **`50`**.
Go ahead and press **"Next"**.

![Threshold 50](/images/aws_conditions_50.png)

> **When CPU is greater than 50, the alarm will be triggered.**

We now need to configure the actions that happen when the alarm gets triggered. 

For **"Alarm state trigger"** leave it as **"In alarm"**. Under that, we want to go ahead and select **"Create new Topic"**. Let's give the topic a name, I am going to use `CPU_Increase`. Now give it your email to receive the notification and press **Create topic**.

 Lastly, leave everything else as it is and press **"Next"**.

![Configure Alarm](/images/aws_configure_alarm_actions.png)

We are going to receive an email titled `AWS Notification - Subscription Confirmation`, go to your and locate it and click the **"Confirm subscription"** link. 

![AWS Notification - Subscription Confirmation](/images/aws_notification_subscription_confirmation.png)

You will then see a confimation like this:
![AWS Notification - confirmed](/images/aws_subscription_confirmed.png)


Going back to the CloudWatch "Configure actions" page, we now need to give it our alarm a name, let's keep it simple and name it `ScaleUp-Alarm` and press **"Next"**. Go ahead and review the steps and don't forget to press **"Create alarm"**. 