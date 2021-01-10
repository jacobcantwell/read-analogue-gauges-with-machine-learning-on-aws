+++
title = "1.x Lambda function"
chapter = false
weight = 30
+++

## Create function

Open AWS Lambda **Functions** and select **Create function**.

![Create function](30_lambda_function/images/create-lambda-function-1.png "Create function")

Select **Author from scratch**

![Author from scratch](30_lambda_function/images/create-lambda-function-2.png "Author from scratch")

### Basic information

A runtime is a version of a programming language or framework that you can use to write Lambda functions. Lambda supports runtimes for the following languages:

* JavaScript (Node.js)
* Python
* Ruby
* Go
* Java
* C# (.NET Core)
* PowerShell (.NET Core)

To use other languages in Lambda, you can create your own runtime.

An execution role gives your Lambda function permission to upload logs and access other AWS services. You will later add a policy to the execution role to give it access to downstream resources including the training S3 bucket.

Enter basic information of the lambda function.

* Function name - Enter a descriptive name like *captureAnalogueGaugeBuilderImages*
* Runtime  - The function will be written in node.js so select *Node.js 12.x*
* Leave Permissions - leave as default *Create a new role with basic Lambda permissions*

![Basic information](30_lambda_function/images/create-lambda-function-3.png "Basic information")

### Advanced settings

Leave Advanced settings as default. Select **Create fnction**.

![Advanced settings](30_lambda_function/images/create-lambda-function-4.png "Advanced settings")

After a short time you will be take to your lambda functions Configuration page. You should see a message saying that you have successfully created the function, you can now change its code and configuration, and can invoke your function with a test event.

![Success message](30_lambda_function/images/create-lambda-function-5.png "Success message")

In the next step, you will configure the function code of you Lambda function.
