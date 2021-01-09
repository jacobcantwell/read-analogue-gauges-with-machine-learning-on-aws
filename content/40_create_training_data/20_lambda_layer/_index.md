+++
title = "1.x Lambda Layer"
chapter = false
weight = 20
+++

Lambda Layers are a convenient way to manage common dependencies between different Lambda Functions.

We will build and deploy a Lambda layer that will be used in the code that creates our training data.

## Create Lambda Layer

You can build the Lambda Layer yourself or use a premade layer in the next step.

### Build Lambda Layer

The following set of (Linux) commands will create a layer of this package alongside puppeteer-core:

```bash
git clone --depth=1 https://github.com/jacobcantwell/chrome-aws-lambda.git && \
cd chrome-aws-lambda && \
make chrome-aws-lambda.zip
```

The above will create a chrome-aws-lambda.zip file, which can be uploaded to your Layers console.

## Deploy Lambda Layer

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
