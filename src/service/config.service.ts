import { DynamoTables, getDynamoClient } from '../libs/dynamo';
import { Config } from '../model/Config';

export const getConfig = async (): Promise<Config> => {
  const dynamoClient = getDynamoClient();
  var params = {
    TableName: DynamoTables.CONFIG,
    Key: {
      id: '1',
    },
  };
  const data = await dynamoClient.get(params).promise();
  return data.Item as any;
};

export const saveConfig = async (config: Config) => {
  const dynamoClient = getDynamoClient();
  var params = {
    TableName: DynamoTables.CONFIG,
    Item: { id: '1', ...config },
  };
  await dynamoClient.put(params).promise();
  return config;
};
