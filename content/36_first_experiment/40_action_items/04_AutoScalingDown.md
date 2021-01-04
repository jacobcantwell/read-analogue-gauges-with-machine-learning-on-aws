+++
title = "2.5.4 AutoScaling Down Setup"
chapter = true
weight = 04
+++

# 2.5.4 AutoScaling Down Setup
## Set up Auto Scaling Down: 

We want to follow the same steps as earlier, but instead add a new policy that will be called **`ScaleDown`**, and we we will be creating a new alarm for it. 

> This Alarm will be for when CPU utilization is less than or equal to (<=) 30% within a 1 minute.

We can see the **"ScaleUp"** Poly and now we are going to press **"Add policy"** to set up our auto scaling down policy. 
![Container Insights Results](/images/aws_create_down_policy.png)

In the next page Select **Automatic scaling**, followed by **Add Policy.**

For **"Policy type"** select **"Simple scaling"**

For Scaling Policy name, feel free to call it **`ScaleDown`**. We will now need to setup a new CloudWatch alarm for it, go ahead and select **"Create a CloudWatch alarm"**.
## Set up Auto Scaling: Configure Cloudwatch

We need to find the metric we want to alarm for first. Select **"Select Metric"**, **"Container Insights"**, followed by **"ClusterName, InstanceId, NodeName"**.  Locate `node_cpu_utilization` and press **"Select Metric".**  

![Container Insights Results](/images/aws_select_cpu_utilization.png)

 Now we get to specify metrics and conditions. Under the first section, just change the period to be **"1 minute".**

![Container Insights Results](/images/aws_period_1min.png)

Let's move to **"Conditions"**:

1. Leave **Static** selected.
2. Choose **"Lower/Equal"** 
3. For the box of threshold value, type **`30`**.
Go ahead and press **"Next"**.



> **When CPU is less than or equal to 30%, the alarm will be triggered.**


![Threshold 30](/images/aws_conditions_30.png)

We now need to configure the actions that happen when the alarm gets triggered. 

For **"Alarm state trigger"** leave it as **"In alarm"**. Under that, we want to go ahead and select **"Select an existing SNS topic"**. and choose the **"CPU_Increase"** we created earlier and press **"Next"**.  Now need to give it our alarm a name, let's keep it simple and name it `ScaleDown-Alarm` and press **"Next"**. Go ahead and review the steps and don't forget to press **"Create alarm"**. 

> We want our Auto Scaling Policy to be triggered when the alarm we just created goes off and we want AWS to wait 10 minutes (600 seconds) before the auto scaling policy gets applied again. 


Switch back to the "Create scaling policy" tab we were in earlier, and press the refresh icon to locate the `ScaleDown-Alarm` CloudWatch alarm we just created. Under "Take the Action" Choose to **"Set to" "3" "capacity unit"**. Lastly, for **"seconds before allowing another scaling activity"**, make it **`600`** and press **"Create"**

![AWS Create scaling policy](/images/aws_create_scaling_policy_down.png)