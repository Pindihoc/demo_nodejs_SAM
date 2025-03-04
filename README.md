# AWS Step Functions Demo with SAM in nodejs (javascript)

## Overview

This project demonstrates the implementation of an AWS Step Functions workflow using the AWS Serverless Application Model (SAM). The architecture includes multiple Lambda functions orchestrated through a Step Function, with error handling capabilities.

## Architecture

The solution consists of the following components:

- **Lambda Functions**:
  - `Lambda1`: Primary processing function
  - `Lambda2`: Secondary processing function
  - `ErrorHandler`: Handles exceptions from the main workflow

- **Step Function**: Orchestrates the workflow between Lambda functions

- All resources are deployed within a VPC for enhanced security

## Prerequisites

- AWS CLI installed and configured
- AWS SAM CLI installed
- Docker

## Project Structure
```
.
├── README.md # This file
├── template.yaml # Main SAM template
├── infra/
│ ├── lambda-1-template.yaml # Lambda1 nested stack
│ ├── lambda-2-template.yaml # Lambda2 nested stack
│ ├── error-handler-lambda-template.yaml # Error handler nested stack
│ └── step-function-template.yaml # Step Function nested stack
├──  packages/
│ ├──handlers/ # Lambdas handler
│ ├──services/ # shared services
│ ├──tests/ # testcases for unit/ integration
│ └──cmd/ # docker files
```

## Deployment

### Configuration

The project uses environment mappings for VPC configuration. Make sure your AWS account has the necessary VPC and subnet resources defined.

### Deploy with SAM
Build the application
sam build --use-container -t template.yaml

Deploy to AWS (first deployment)
sam deploy --resolve-image-repos --config-env {{CONFIG_ENV}}

Subsequent deployments
not recommend

### Parameters

During deployment, you'll be prompted for:

- `env`: Environment name (dev, prod)
- Stack name, region, and other SAM deployment parameters

## Local Testing

support: SAM local, vitest for unit tests and AWS CDK for integration tests


## Resource Details

### Lambda Functions

The Lambda functions are deployed as nested stacks, each with its own configuration for VPC, subnets, and environment variables.

### Step Function

The Step Function coordinates the execution flow between Lambda1, Lambda2, and the ErrorHandler. It's configured to handle errors gracefully and provide detailed execution information.

## Security

All resources are deployed within a VPC for enhanced security. Make sure to review and adjust IAM permissions as needed for your specific use case.
