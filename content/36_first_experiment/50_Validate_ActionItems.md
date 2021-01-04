+++
title = "2.6 Validate Action Items"
chapter = true
weight = 60
+++

# 2.6 Validate Action Items
You've made your application more resilient by setting up auto-scaling. It should look something like this:
![AWS Scaling policies](/images/aws_scaling_policies.png)


Let's verify it's doing what you expected. As we did earlier, you want to write down our Hypothesis and Abort Conditions before moving to the next step. Feel free to use the experiment card if needed.

![Experiment Card](/images/Experiment_Card.jpg)

Let's head back to[Gremlin](app.gremlin.com), and configure a CPU attack on all of your hosts. Click on **"Attacks"** which can be found on the Left Navigation Bar followed by **"New Attack".**


lick on **"Attacks"** which can be found on the left navigation bar followed by **"New Attack".** 

![Gremlin UI New Attack](/images/gremlin/gremlin_ui_create_new_attack.png)

Under **"What do you want to attack?"**,  you want to select **Hosts**, followed by your three hosts. 

![Gremlin UI Select Hosts](/images/gremlin/gremlin_ui_select_hosts.png)

Under **“Choose a Gremlin”**, select **"Resource"** followed by **"CPU"** to consume CPU on your targets:  For the configuration, change **Length** to 360 seconds, change **CPU Capacity** to **`80`** and select **"All Cores"** from the dropdown. 


![Gremlin UI CPU Attack](/images/gremlin/gremlin_ui_cpu_attack.png)

Then, click **"Unleash Gremlin"**

## Observe

> **Are your results different on CloudWatch and Container Insights than the first time you ran the CPU Experiment? Did the graph for Number of Nodes see an increase?** 