const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition()

const LAMBDA_VERSION = '003'

exports.handler = async (event) => {
  console.log('running start model lambda', LAMBDA_VERSION)
  const project_arn = 'arn:aws:rekognition:us-east-1:158287123688:project/PressureGaugeDetectionv2/1610343147429'
  const model_arn='arn:aws:rekognition:us-east-1:158287123688:project/PressureGaugeDetectionv2/version/PressureGaugeDetectionv2.2021-01-13T21.19.23/1610533163713'
  const min_inference_units=1 
  const version_name='PressureGaugeDetectionv2.2021-01-13T21.19.23'
  console.log('starting model for project', project_arn, model_arn, min_inference_units, version_name)

  try {

    // start the model
    console.log('Starting model: ' + model_arn)
    const startProjectVersionParams = {
      MinInferenceUnits: min_inference_units,
      ProjectVersionArn: model_arn
    }
    const startProjectVersionResult = await rekognition.startProjectVersion(startProjectVersionParams)
    console.log('startProjectVersionResult', startProjectVersionResult)
    
    // wait for the model to be in the running state
    const waitForParams = {
      ProjectArn: project_arn
    }
    const waitingForResult = await rekognition.waitFor('projectVersionRunning', waitForParams)
    console.log('waitingForResult', waitingForResult)
    
    // get the running status
    const describeProjectVersionsParams = {
      ProjectArn: project_arn
    }
    const describeProjectVersionsResult = await rekognition.describeProjectVersions(describeProjectVersionsParams)
    console.log('describeProjectVersionsResult', describeProjectVersionsResult)
    
  } catch (err) {
    console.error(err)
  }

  const response = {
      statusCode: 200,
      body: JSON.stringify('hey taxi')
  }
  return response
}
