+++
title = "1.x Lambda Layer"
chapter = false
weight = 20
+++

Open AWS Lambda **Layers**

![Open Layers](20_lambda_layer/images/create-lambda-layer-1.png "Open Layers")

Open **Create layer**

![Create layer](20_lambda_layer/images/create-lambda-layer-2.png "Create layer")

* Enter Name - chrome-aws-lambda
* Description - chrome-aws-lambda
* Upload a .zip file - select the lambda layer *chrome_aws_lambda.zip* file
* Select compatible runtimes - Select Node.js 12.x
* Select **Create**

![Create layer](20_lambda_layer/images/create-lambda-layer-3.png "Create layer")

You should see Lamba Layer was successfully created

![Layer successfully created](20_lambda_layer/images/create-lambda-layer-4.png "Layer successfully created")

Open **Lambda** to continue. In the next step we will create a Lambda Function that will generate the training data images.
