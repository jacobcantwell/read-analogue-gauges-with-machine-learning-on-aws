+++
title = "4.1 Scheduling"
chapter = true
weight = 10
+++

# 4.1 Scheduling
## Schedule Gremlin Attacks

We are going to take the first step in Automation! Gremlin allows you to schedule attacks to execute on certain days and within a specified time window. You can also set the maximum number of attacks a schedule can spawn. 


We will start off by going back to [Gremlin](https://app.gremlin.com) to configure a Shutdown attack. 

Click on **"Attacks"** which can be found on the left navigation bar followed by **"New Attack".** 

![Gremlin UI New Attack](/images/gremlin_ui_create_new__blackhole_attack.png)

Under **"What do you want to attack?"**,  you want to select **Containers**, followed by switching to the **"Tags"** view.

![Gremlin UI - Containers - Tags](/images/gremlin_ui_containers_tags.png)

Then, we will toggle **Target all containers** and change the **Number of targets to impact** to **`1`**. 

![Gremlin UI - Containers - 1](/images/gremlin_ui_containers_tags_target_1.png)

This will randomly target 1 container.

Under **“Choose a Gremlin”**, select **"State"** followed by **"Shutdown"**. Change **Delay** to **`0`** and turn off **Reboot**.

![Gremlin UI shutdown Attack](/images/gremlin_ui_shutdown_config.png) 

Now we can schedule the attack, let's turn on **Schedule for later** and select **Randomly within a time frame** and select Monday, Wednesday and Friday. 
For **Runs per day**, I'm going to give it **3**.
I want this to run in between working hours of **`09:00` and `15:00`**.

Go ahead and press the **Unleash Gremlin** button to schedule it. 

![Gremlin UI schedule attack](/images/gremlin_ui_schedule_attack.png) 

We can see all of our scheduled attacks via **"Schedules"** on the Gremlin UI
![Gremlin UI scheduled attacks](/images/gremlin_ui_schedules.png) 
