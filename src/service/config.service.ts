import { DynamoTables, getDynamoClient } from '../libs/dynamo';
import { Config } from '../model/Config';

export const getConfig = async () => {
  const dynamoClient = getDynamoClient();
  var params = {
    TableName: DynamoTables.CONFIG,
    Key: {
      id: 1,
    },
  };
  return await dynamoClient.get(params).promise();
};

export const saveConfig = async (config: Config) => {
  const dynamoClient = getDynamoClient();
  var params = {
    TableName: DynamoTables.CONFIG,
    Item: { id: 1, ...config },
  };
  await dynamoClient.put(params).promise();
  return config;
};
