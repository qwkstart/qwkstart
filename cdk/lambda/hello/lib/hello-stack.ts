import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, AssetCode } from 'aws-cdk-lib/aws-lambda'
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway'

export class HelloStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const helloFunction = new Function(this, 'helloFunction', {
      code: new AssetCode('lambda'),
      handler: 'hello.handler',
      runtime: Runtime.NODEJS_14_X
    });

    new LambdaRestApi(this, 'helloLambdaRestApi', {
      restApiName: 'Hello API',
      handler: helloFunction,
    });

  }
}
