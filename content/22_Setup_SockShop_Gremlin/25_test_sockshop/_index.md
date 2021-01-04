+++
title = "1.3 Test your sock shop"
chapter = true
weight = 22
+++

# Test Your Sock Shop

In order to test that our sock-shop has been deployed, we are going to grab the load balancer DNS name and test it in our own browser. Look for the steps for your corresponding setup:

- [New EC2 Experience](#if-you-are-using-the-new-ec2-experience-follow-this)
- [Older EC2 Experience](#if-you-are-using-the-older-ec2-experience-follow-this) 
- [Running this workshop on your own](#if-you-are-running-this-workshop-on-your-own-follow-this)




#### If you are using the **New EC2 Experience** follow this: 

**If you are running this in an AWS event,** visit the [EC2 Console](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Home:) and log in to your bastion host EC2 instance. The name of your bastion host will end in **-bastion.** (Example: **mod-f679f4081e7d405c-bastion**). 
![Bastion-ec2](/images/ec2_connect.png)

Locate your bastion host and using the "Actions" dropdown select "Connect" and then select **EC2 Instance Connect**. 

On the next page, go ahead and change the username from **root** to `ec2-user` and press **Connect**. A new browser tab will open. 

![ec2-change-username](/images/ec2_change_user.png)

{{% notice tip %}}
Leave the AWS EC2 Console tab open, we will use it again
{{% /notice %}}

Run the following command in the console window to grab the load balancer IP:

```
kubectl get svc -o wide -n sock-shop | grep LoadBalancer
```

Copy the load balancer DNS name from the terminal and paste it. 

![Bastion-lb](/images/LB-IP.png)

Paste it into your web browser, and you should be good to go.

![Bastion-sock](/images/Browser-Sock.png)

{{% notice tip %}}
Also keep the sock shop browser tab open for the rest of today's activities. 
{{% /notice %}}

#### If you are using the **Older EC2 Experience** follow this: 

![AWS - EC2 - Old Experience ](/images/aws_ec2_connect_1.png)

**If you are running this in an AWS event,** visit the [EC2 Console](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Home:) and log in to your bastion host EC2 instance. The name of your bastion host will end in **-bastion.** (Example: **mod-f679f4081e7d405c-bastion**). Locate your bastion host and press **"Connect"**, a pop up screen will display as seen below:

![AWS - EC2 - Old Experience ](/images/aws_ec2_connect_2.png)

In the pop up select **EC2 Instance Connect** and a new browser window will open. 

{{% notice tip %}}
Keep this browser window open for the rest of today's activities. 
{{% /notice %}}

Run the following command in the console window to grab the load balancer IP:

```
kubectl get svc -o wide -n sock-shop | grep LoadBalancer
```

Copy the load balancer DNS name from the terminal and paste it. 

![Bastion-lb](/images/LB-IP.png)

Paste it into your web browser, and you should be good to go.

![Bastion-sock](/images/Browser-Sock.png)

{{% notice tip %}}
Also keep the sock shop browser tab open for the rest of today's activities. 
{{% /notice %}}

#### If you are running this workshop on your own, follow this: 
Run the following command in your cloud9 terminal in order to grab the load balancer DNS name:

```
kubectl get svc -o wide -n sock-shop | grep LoadBalancer
```
Paste it into your web browser, and you should be good to go.

{{% notice tip %}}
Keep this browser tab open for the rest of today's activities. 
{{% /notice %}}
