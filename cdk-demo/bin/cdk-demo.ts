#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkDemoStack } from '../lib/cdk-demo-stack';

//const app = new cdk.App();
//new CdkDemoStack(app, 'CdkDemoStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  //env: { account: 'my-aws-acct-id', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
//});
// 
// https://aws.amazon.com/getting-started/guides/setup-cdk/module-three/
// 
// I have not tried cdk deploy yet, as npm run build gave 6 errors
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