+++
title = "1.x Lambda code"
chapter = false
weight = 40
+++

## Designer

### Add Lambda layer

In the Designer section, open **Layers** and select **Add a layer**.

![Add Lambda layer](40_lambda_code/images/code-lambda-function-1.png "Add Lambda layer")

### Choose a layer

Select **Custmer layers**.
Select the custom Lambda layer we created in the previous step, **chrome-aws-lambda**
Select Version *1*
Select **Add**

![Add chrome-aws-lambda custom layer](40_lambda_code/images/code-lambda-function-2.png "Add chrome-aws-lambda custom layer")

You should now see a (1) in the Lambda Layers box.

![Layer added](40_lambda_code/images/code-lambda-function-3.png "Layer added")

## Function code

### Add function code

The *Function code* section includes a default function that we can modify using the built in code editor.

![Replace function code](40_lambda_code/images/code-lambda-function-6.png "Replace function code")

Copy and paste the code below to replace the default function.

```javascript
const chromium = require('chrome-aws-lambda')
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const s3Bucket = process.env.S3_TRAINING_BUCKET

const zeroPad = (num, places) => String(num).padStart(places, '0')

exports.handler = async (event, context, callback) => {
  let result = null
  let browser = null
  let results = []
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })
    let page = await browser.newPage();
    for (let i = 0; i < 231; i++) {
        let bp = zeroPad(i, 4);
        const url = 'https://aws-computer-vision.jacobcantwell.com/gauge/?bp=' + bp;
        const s3Key = 'training-images/pressure-gauge-bp-'+bp+'.jpg';
        await page.setViewport({ width: 700, height: 780 });
        await page.goto(url);
        const screenshot = await page.screenshot({
            type: 'jpeg',
            fullPage: true
        });
        const s3Params = {
            Bucket: s3Bucket,
            Key: s3Key,
            Body: screenshot
        };
        await s3.putObject(s3Params).promise();
        console.log('finished screenshot', s3Key);
        results.push(url);
    }
    result = {
        urls: results
    }
} catch (error) {
    return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
  return callback(null, result);
};
```

Select the **Deploy** button.

![New function code](40_lambda_code/images/code-lambda-function-7.png "New function code")

### Environment variables

* Select **Edit**
* Select **Add environment variable**
* Enter a Key/Value pair for the S3 training bucket
  * Key enter *S3_TRAINING_BUCKET*
  * Value enter *deeplens-analogue-gauge-727949722849*
* Select **Save**

![Environment variables](40_lambda_code/images/code-lambda-function-8.png "Environment variables")

Select the **Deploy** button. You should see a message *Your changes have been saved.*.

### Basic settings

The Memory (MB) setting determines the amount of memory available for your Lambda function during invocation.

The default Timeout setting is 3 seconds. If tested now, the Lambda will throw an error message saying the task timed out after 3 seconds. Each screenshot takes up to 3 seconds to generate, we will create 230 images, so the timeout needs to be more than 690 seconds.

* Edit the Description - Add a description of the function, *This function creates the training data for the Read Analogue Gauges workshop.*
* Memory (MB) - Increase to 4096 MB
* Timeout - Increase to 15 min
* Execution role - Select the existing service role with the *service-role/captureAnalogueGaugeTraining-role-* prefix
* Select **Save**

![Basic settings](40_lambda_code/images/code-lambda-function-9.png "Basic settings")

Select the **Deploy** button. You should see a message *Your changes have been saved.*.

## Permissions

Change to the *Permissions* tab at the top of the Lambda function page.

### Execution role

Select the role name with the *captureAnalogueGaugeTraining-role-* prefix. This will launch the Identity and Access Management (IAM) service in a new tab.

![Edit execution role](40_lambda_code/images/code-lambda-function-10.png "Edit execution role")

* Select **Attach policies**
* Filter the policies with *S3*
* Select *AmazonS3FullAccess*
* Select **Attach policy**

{{% notice info %}}
Security best practices are to give resources only the absolute minumum permissions so that they can function. Instead of a general AWS managed policy, you can create a custom IAM policy that only grants write access to the single S3 training bucket.
{{% /notice %}}

Return back to the lambda function tab in your web browser.

## Test

* Select **Test** at the top of the Lambda function page.

![Test](40_lambda_code/images/code-lambda-function-11.png "Test")

* Enter an Event name *captureAnalogueGauges*
* Leave the test event JSON at its default value
* Select **Create**

![Test](40_lambda_code/images/code-lambda-function-12.png "Test")

You should now see a new captureAnalogueGauges test event next to the **Test** button. Select **Test**.

An Executing function... message will appear and the Lambda function should run for several minutes while it generates the training images.

![Test running](40_lambda_code/images/code-lambda-function-13.png "Test running")

## S3

You can see the progress of the training image generation by browsing to the S3 bucket.

* Search for *S3* in the AWS Management Console search bar
* Open the *deeplens-analogue-gauge-727949722849* training bucket
* Open the *training-images* folder

Select the *Refresh* button to see more Objects as they are created. When the Lambda function is complete 231 training images will be created.

![S3 bucket view](40_lambda_code/images/s3-training-data-1.png "S3 bucket view")

* Select one of the training images
* Select *Object actions* then *Download* to download a training image to your local computer

![S3 object view](40_lambda_code/images/s3-training-data-2.png "S3 object view")

The image will download to your local computer for you to preview.

![Pressure gauge image](40_lambda_code/images/pressure-gauge-bp-0010.jpg# thumbnail "Pressure gauge image 0010")

![Pressure gauge image](40_lambda_code/images/pressure-gauge-bp-0120.jpg# thumbnail "Pressure gauge image 0120")

![Pressure gauge image](40_lambda_code/images/pressure-gauge-bp-0230.jpg# thumbnail "Pressure gauge image 0230")
