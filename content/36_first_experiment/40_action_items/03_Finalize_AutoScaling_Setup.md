+++
title = "2.5.3 AutoScaling Up Setup"
chapter = true
weight = 03
+++


## Set up Auto Scaling: 

Switch back to the "Create scaling policy" tab we were in earlier, and press the refresh icon to locate the CloudWatch alarm we just created. Under "Take the Action" Choose to **"Add" "1" "capacity unit"**. 
Lastly, for **"seconds before allowing another scaling activity"**, make it **`600`**. 
![AWS Create scaling policy](/images/aws_create_scaling_policy.png)

> We want our Auto Scaling Policy to be triggered when the alarm we just created goes off and we want AWS to wait 10 minutes (600 seconds) before the auto scaling policy gets applied again. 




