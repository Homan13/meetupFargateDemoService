const cdk = require('@aws-cdk/cdk');
const ec2 = require('@aws-cdk/aws-ec2');
const ecs = require('@aws-cdk/aws-ecs');
const ecsPatterns = require('@aws-cdk/aws-ecs-patterns');

class meetUpFargateDemoServiceStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

  const vpc = new ec2.Vpc(this, 'DemoVpc', {
    maxAZs: 3
  });

  const cluster = new ecs.Cluster(this, 'DemoCluster', {
    vpc: vpc
  });

  // Create a load-balanced Fargate service and make it public
  new ecsPatterns.LoadBalancedFargateService(this, 'DemoFargateService', {
    cluster: cluster,  // Required
    cpu: '512',
    desiredCount: 6,
    image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"), // Required
    memoryLimitMiB: '2048',
    publicLoadBalancer: true
  });
  }
}

module.exports = { meetUpFargateDemoServiceStack }
