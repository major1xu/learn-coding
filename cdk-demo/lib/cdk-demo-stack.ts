//import { Stack, StackProps } from 'aws-cdk-lib';
//import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as cdk from '@aws-cdk/core';
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';

//
// https://aws.amazon.com/getting-started/guides/setup-cdk/module-three/
// 
export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // CHANGE: We have created the vpc object from the Vpc class.
    const vpc = new Vpc(this, 'MainVpc',{
    
    // CHANGE: this is where we define how many AZs to use
    maxAzs: 2,
      
   // CHANGE: We define a single subnet configuration per AZ.
      subnetConfiguration:  [
        {
          // CHANGE: this is it's CIDR mask so 255.255.255.0
          cidrMask: 24,

          // CHANGE: a name for each of these subnets
          name: 'public-subnet',

          // CHANGE: and the subnet type to be used - here we will have
          // a public subnet. There are other options available here.
          subnetType: SubnetType.PUBLIC
        },
      ]
    });
  }
}
