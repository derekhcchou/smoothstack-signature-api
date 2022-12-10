import { AWS } from '@serverless/typescript';

export const dbResources: AWS['resources']['Resources'] = {
  SignatureUserTable: {
    Type: 'AWS::DynamoDB::Table',
    DeletionPolicy: 'Retain',
    Properties: {
      TableName: 'smoothstack-signature-user-table',
      AttributeDefinitions: [
        {
          AttributeName: 'primaryEmail',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'primaryEmail',
          KeyType: 'HASH',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    },
  },
  SignatureConfigTable: {
    Type: 'AWS::DynamoDB::Table',
    DeletionPolicy: 'Retain',
    Properties: {
      TableName: 'smoothstack-signature-config-table',
      AttributeDefinitions: [
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'id',
          KeyType: 'HASH',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    },
  },
};
