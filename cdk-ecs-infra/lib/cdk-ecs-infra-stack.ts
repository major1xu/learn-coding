import * as cdk from '@aws-cdk/core';
import ecs = require('@aws-cdk/aws-ecs');
import ec2 = require('@aws-cdk/aws-ec2');
import iam = require('@aws-cdk/aws-iam');
import ecsPatterns = require('@aws-cdk/aws-ecs-patterns')

export class CdkEcsInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      // Look up the default VPC
      const vpc = ec2.Vpc.fromLookup(this, "VPC", {
        isDefault: true
      });

      const taskIamRole = new iam.Role(this, "AppRole", {
        roleName: "AppRole",
        assumedBy: new iam.ServicePrincipal('ecs-tasks.amazonaws.com'),
      });

      const taskDefinition = new ecs.FargateTaskDefinition(this, 'Task', {
        taskRole: taskIamRole,
      });

      taskDefinition.addContainer('MyContainer', {
        image: ecs.ContainerImage.fromAsset('../SampleApp'),
        portMappings: [{ containerPort: 80 }],
        memoryReservationMiB: 256,
        cpu : 256,
      });

      new ecsPatterns.ApplicationLoadBalancedFargateService(this, "MyApp", {
        vpc: vpc,
        taskDefinition: taskDefinition,
        desiredCount: 1,
        serviceName: 'MyWebApp',
        assignPublicIp: true,
        publicLoadBalancer: true,
      })

  }
}
