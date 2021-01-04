+++
title = "4.2 API"
chapter = true
weight = 20
+++

# 4.2 API
## Automate Gremlin Attacks via the API

We are going to take the next step in Automation! Gremlin allows you to leverage the API that does the same things our UI does. After creating a new attack, select **Gremlin API Examples** before unleashing it. Gremlin provides you with everything you need to run your first API attack. 

![Gremlin UI - Gremlin API Examples ](/images/gremlin_ui_api_examples.png) 

We can easily choose our Authorization method and be given the proper CURL command. You can create API tokens, but for now we will just the Bearer Token provided. 
![Gremlin UI - Gremlin API Examples ](/images/gremlin_ui_api_examples2.png) 

Go ahead and copy and paste into your console the **CURL Example**.
Since I'm running a CPU experiment it looks like this:

```
curl -i -X POST 'https://api.gremlin.com/v1/attacks/new?teamId=ed09d800-018a-591a-b591-75cb717a3eb5' -H 'Content-Type: application/json;charset=utf-8' -H 'Authorization: Bearer Yy1kNWJhMWMyNy05OGVlLTU2ZWUtOWUwZS00OTY5NzA1ZGUyOWI6YW5hKzEyQG******************' -d '{"target":{"hosts":{"ids":["ip-10-0-48-196.ec2.internal"]},"type":"Exact"},"command":{"type":"shutdown","commandType":"Shutdown","args":["-d","0"]}}'
```
![AWS EC2 Console - Run Attack ](/images/gremlin_ui_api_aws_console.png) 

We can see on the Gremlin UI that the API attack is running. 

![Gremlin UI - Gremlin API - Attack Pending](/images/gremlin_ui_api_attack_unleashed.png) 
You can read more about Gremlin's API via our [Docs](https://www.gremlin.com/docs/api-reference/overview/) and you can also use our [interactive Swagger documentation](https://app.gremlin.com/api) when you are logged in. 

You can leverage Gremlin's API your CI/CD pipelines or other tooling. 