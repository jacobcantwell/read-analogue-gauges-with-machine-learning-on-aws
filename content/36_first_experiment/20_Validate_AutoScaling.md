+++
title = "2.3 Validate Auto-Scaling"
chapter = true
weight = 20
+++

# 2.3 Validate Auto-Scaling
## Plan Experiment 
This first scenario that we’ll run is to verify and help tune autoscaling. Autoscaling in AWS is easy to accomplish, but hard to master due to it being a means to scale infrastructure relative to traffic demands.

We talked about following the scientific method when doing chaos engineering experiment, the experiment card below helps you build the experiments. 

![Experiment Card](/images/Experiment_Card.jpg)

You want to write down your **Hypothesis** and **Abort Conditions** before moving to the next step. Your **hypothesis** should be based on what you expect to happen to your system as you unleash the chaos, and the **abort conditions** will cover the conditions that would cause you to halt the experiment. 

Here is an example of my experiment card: 
![Experiment Card Example](/images/Experiment_Card_Example.jpg)

## Unleash Experiment
We will start off by going back to [Gremlin](https://app.gremlin.com) to configure a CPU attack on all of our hosts.

Click on **"Attacks"** which can be found on the left navigation bar followed by **"New Attack".** 

![Gremlin UI New Attack](/images/gremlin/gremlin_ui_create_new_attack.png)

Under **"What do you want to attack?"**,  you want to select **Hosts**, followed by your three hosts. 

![Gremlin UI Select Hosts](/images/gremlin/gremlin_ui_select_hosts.png)

Under **“Choose a Gremlin”**, select **"Resource"** followed by **"CPU"** to consume the CPU on your targets. For the configuration, change **Length** to 360 seconds, change **CPU Capacity** to **`80`** and select **"All Cores"** from the dropdown. 


![Gremlin UI CPU Attack](/images/gremlin/gremlin_ui_cpu_attack.png)

Then click **"Unleash Gremlin"**

🎉 Congrats, you've unleashed your first attack! In the next page, we will talk about observing the chaos engineering experiment we just unleashed. 