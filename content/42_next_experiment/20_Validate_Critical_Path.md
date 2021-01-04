+++
title = "3.2 Validate Critical Path"
chapter = true
weight = 20
+++

# 3.2 Validate Critical Path
## Second Experiment
The second experiment that we’ll run is around us asking ourselves **What happens to your application when a critical application has issues?**


You want to write down your Hypothesis and Abort Conditions before moving to the next step. 
Your hypothesis should be based on what you expect to happen to your system as you unleash the chaos, and the abort conditions will cover the conditions that would cause you to halt the experiment. Feel free to reference the experiment card again if you need it. 

![Experiment Card](/images/Experiment_Card.jpg)

## Unleash Experiment
We will start off by going back to [Gremlin](https://app.gremlin.com) to configure a **Blackhole** attack on one of the services in our critical path. The Gremlin Blackhole attack drops all matching network traffic which allows for us to replicate a service outage.

Click on **"Attacks"** which can be found on the left navigation bar followed by **"New Attack".** 

![Gremlin UI New Attack](/images/gremlin_ui_create_new__blackhole_attack.png)

Under **"What do you want to attack?"**,  you want to select **Containers**, followed by typing on the text to look for the tags based on out services.  We are going to look for two services, they are going to **`catalogue`** and **`catalogue-db`**

When you are typing and searching for it, it will look like this:
![Gremlin UI - Search Tags ](/images/gremlin_ui_select_container_tags.png)

After you've typed both tags, go ahead and select both services it should look like this:
![Gremlin UI Selected Tags](/images/gremlin_ui_selected_catalogue.png)

You can see that the blast radius for this experiment is small and only 2 containers. 

Under **“Choose a Gremlin”**, select **"Network"** followed by **"Blackhole"**. 
![Gremlin UI Blackhole Attack](/images/gremlin_ui_network_blackhole.png) 

For the configuration, change **Length** to **`360`** seconds and leave everything as it is. 


![Gremlin UI Blackhole Attack](/images/gremlin_ui_blackhole_attack.png)

Then click **"Unleash Gremlin"**

Now let's go and observe the chaos engineering experiment we just unleashed via the user experience and Container Insights. 