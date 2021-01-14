+++
title = "x.1 SageMaker Notebooks"
chapter = true
weight = 50
+++

## x.1 SageMaker Notebooks

In this section you will use a Jupyter Notebook to create and execute an Amazon SageMaker Object-Detection Training Job against a pre-labelled image dataset.

### Jupyter notebooks

The [Jupyter Notebook](https://jupyter.org/) is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. Uses include: data cleaning and transformation, numerical simulation, statistical modelling, data visualization, machine learning.

A Jupyter Notebook provides a python run-time environment and a workspace that together can be used to pull in machine learning datasets and perform any of the following functions:

1. Clean or perform data pre-processing,
2. Data transformation and augmentation,
3. Predictive Inference and
4. Data and Inference visualisation.

### Notebook instances

The main interface for Amazon SageMaker projects is through Jupyter notebooks. Jupyter is an interactive Python environment designed for rapid iteration. Amazon SageMaker makes deploying and managing Jupyter notebooks easy.

From your Amazon SageMaker console, select **Notebook instances** then **Create notebook instance**.

![Create notebook instance](10_sagemaker_notebook/images/sagemaker-create-notebook-1.png "Create notebook instance")

#### Notebook instance settings

Enter a name, such as *analogue-gauge-detection*, for your notebook instance, leave everything else in this section as the default.

![Notebook instance settings](10_sagemaker_notebook/images/sagemaker-create-notebook-2.png "Notebook instance settings")

#### Permissions and encryption

A SageMaker Execution Role has already been created. Select the existing *AmazonSageMaker-ExecutionRole-* prefixed name role from the pull-down list. The exact role title may differ from that shown below.

![Permissions and encryption](10_sagemaker_notebook/images/sagemaker-create-notebook-3.png "Permissions and encryption")

{{% notice warning %}}
Only if no existing *AmazonSageMaker-ExecutionRole-* prefixed name role exists in the AWS account you will need to select Create a new role from the selection list. If being used in a lab environment, on the pop-up menu select *Any S3 bucket* to allow the notebook instance to any S3 buckets in your account. Then, click on *Create role* button on the bottom.
{{% /notice %}}

### Create notebook instance

Leave the remaining sections as default and click Create notebook instance.

![Create notebook instance](10_sagemaker_notebook/images/sagemaker-create-notebook-4.png "Create notebook instance")

### Open notebook instance

In the Amazon SageMaker console, select **Notebook instances** and click on the notebook title you created in the previous step. This will open the control panel to the instance itself.

![Create notebook instance](10_sagemaker_notebook/images/sagemaker-create-notebook-5.png "Create notebook instance")

{{% notice info %}}
The notebook instance will take a few minutes to initialise. Wait until the instance status moves from Pending to InService on the SageMaker Notebook Instance console.
{{% /notice %}}

Once the notebook is InService, Open the managed Jupyter notebook by clicking on **Open Jupyter**.

![Open Jupyter](10_sagemaker_notebook/images/sagemaker-create-notebook-6.png "Open Jupyter")

You should see the Jupyter notebook console shown below.

![Jupyter notebook console](10_sagemaker_notebook/images/sagemaker-create-notebook-7.png "Jupyter notebook console")

In the next step you will upload and modify a Jupyter notebook.
