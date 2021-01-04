+++
title = "Part 4: New Models"
chapter = true
weight = 50
+++

# Part 4: Automating Model Training
## What is Chaos Engineering Automation
**Chaos Engineering Automation** is the practice of implementing Chaos Engineering Experiments in a **continuous** way to prevent **regression into past failures.**

## Why Automate?

Automation of experiments reinforces that your applications  won’t be vulnerable to failures because you will have to design your applications against these failures consistently. It’s a forcing function for application developers to think about common and known failures first when building applications.

One wants to automate experiments in pre-prod environments before automating experiments in production. 

Gremlin allows for one to implement automation various ways:

+ Scheduling 
+ API Calls 
+ SDK Implementations 
+ Status Checks
+ CI/CD



{{% children showhidden="false" %}}
