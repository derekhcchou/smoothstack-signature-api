import type { AWS } from '@serverless/typescript';
import { dbResources } from './dbResources';

const serverlessConfiguration: AWS = {
  service: 'smoothstack-signature-db',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    region: 'us-east-1',
  },
  resources: {
    Resources: {
      ...dbResources,
    },
  },
};

module.exports = serverlessConfiguration;