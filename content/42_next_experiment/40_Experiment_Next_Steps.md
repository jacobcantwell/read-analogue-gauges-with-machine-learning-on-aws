+++
title = "3.4 Experiment Next Steps"
chapter = true
weight = 30
+++

# 3.4 Experiment Next Steps
### Do you see anything? 
Maybe when you ran your experiment you realized that you completely broke your application.

![Sock Shop Results](/images/blackhole_results1.png)
![Sock Shop Results](/images/blackhole_results2.png)

**Is this acceptable for your customers?**

> No

Did you press the halt button?

![Gremlin UI - Halt](/images/gremlin_ui_halt_explanation.png)



**Was this expected?**

 No? Great, you’ve found a weakness before it became an outage!
 Chaos Engineering uncovers unknown side effects.

 **Was this detected?**

 No? Awesome, there’s a great opportunity to improve monitoring and bring down that MTTD.
 Ensuring that our monitoring is configured correctly is critical.

 **Was it mitigated?**

 It sure feels a lot more comfortable working on resolving an issue knowing that your users can still access your service! When possible our systems should gracefully degrade.
