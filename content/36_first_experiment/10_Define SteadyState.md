+++
title = "2.1 Define Steady State"
chapter = true
weight = 10
+++

# 2.1 Defining Steady State

Before we begin creating failures, a starting point would be to understand the steady state of your application. This includes validating the user experience and revising your dashboard and metrics to understand your systems are operating under normal conditions. 

For our labs, we picked up the Sock Shop application. [Sock Shop](https://github.com/microservices-demo/microservices-demo) is a microservice sample application that [Weaveworks](https://weave.works) initially developed for demoing and testing purposes. They made it open source so it can be used by  other organizations for learning and demonstration purposes. 

![sockshop](https://github.com/microservices-demo/microservices-demo.github.io/raw/master/assets/sockshop-frontend.png)

## Shop Sock Architecture

The architecture of the demo microserivces application was intentionally designed to provide as many microservices as possible. Please don't use the Sock Shop application as a model for a well architected micro-services application, it was built for demonstration purposes. If you are just beginning to architect your own micro-services based cloud native application, [Weaveworks](https://www.weave.works/contact/) would be happy to help recommend the correct architecture for your use case.

We can see on the architecture diagram how all these services talk to each other: 
![sockshop-topology](/images/sockshop-topology.png)


## User Experience 
Let's go ahead and explore our Sock Shop application. 
Some things to try out:

+ Register and log in using the below credentials (These are very secure so please don't share them)
    - **Username:** `user`	
    - **Password:** `password`
+ View various items
+ Add items to cart
+ Remove items from cart
+ Check out items


This is the steady state of our application that we want to compare our user experience as we unleash experiments. 
