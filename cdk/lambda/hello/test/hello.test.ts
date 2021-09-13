import * as cdk from 'aws-cdk-lib';
import * as Hello from '../lib/hello-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Hello.HelloStack(app, 'MyTestStack');
    // THEN
    const actual = app.synth().getStackArtifact(stack.artifactId).template;
    expect(actual.Resources ?? {}).toEqual({});
});
