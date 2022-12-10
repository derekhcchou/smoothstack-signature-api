import type { AWS } from '@serverless/typescript';

import signature from '@functions/signature';
import { dbResources } from './resources/db/dbResources';

const serverlessConfiguration: AWS = {
  service: 'smoothstack-signature-api',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-offline', 'serverless-dynamodb-local'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: '${opt:stage, env:STAGE}',
    region: 'us-east-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    iam: {
      role: 'arn:aws:iam::${opt:aws_account, env: AWS_ACCOUNT}:role/${opt:lambda_role, env:LAMBDA_ROLE}',
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      AWS_ACCOUNT: '${opt:aws_account, env: AWS_ACCOUNT}',
      ENV: '${opt:stage, env:STAGE}',
    },
  },
  // import the function via paths
  functions: { signature },
  resources: {
    Conditions: {
      isLocal: {
        'Fn::Equals': ['${self:provider.stage}', 'local'],
      },
    },
    Resources: {
      ...({
        SignatureUserTable: {
          ...dbResources.SignatureUserTable,
          Condition: 'isLocal',
        },
      } as any),
      ...({
        SignatureConfigTable: {
          ...dbResources.SignatureConfigTable,
          Condition: 'isLocal',
        },
      } as any),
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb: {
      stages: ['local'],
      start: {
        migrate: true,
      },
    },
  },
};

module.exports = serverlessConfiguration;
