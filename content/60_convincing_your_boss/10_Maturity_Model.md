+++
title = "Chaos Engineering Maturity"
chapter = true
weight = 10
+++

# Chaos Engineering Maturity

### Maturity Model
To to be successful in your Chaos Engineering Adoption one needs to understand that we need to start small. We want to:

+ introduce Chaos Engineering into one service/team at a time
+ Start with low magnitude experiments and environments 
+ Automate attacks (Scheduling or via API and CI/CD pipelines)
+ Schedule recurring GameDays and FireDrills
+ Reproduce a previous outage in production



### Building a Business Case
When you talk to your boss frame your Chaos Engineering suggestions in terms of how it will help meet and exceed goals that already exist. Examples of these are:
+ SLA/SLOs
+ Cost of Downtime
+ Length and impact of outages
+ Customer issues/complaints

In order to be successful in your discussion you should also have some metrics around the cost of downtime for your organization and how the services you work on contribute to it. You want to understand which applications have the organization gets paged for the most and the applications that are the largest High Severity Incidents.

You can learn more about Gremlin's Customer's wins via our [Case Studies](http://gremlin.com/customers). 
If you are interested in learning more about this, feel free to read Gremlin's playbook on ["How to Convince Your Organization to Adopt Chaos Engineering"](https://www.gremlin.com/champion-playbook/)