import { DynamoTables, getDynamoClient } from '@libs/dynamo';
import { User } from '../model/User';

export const getUser = async (primaryEmail: string): Promise<User> => {
  const dynamoClient = getDynamoClient();
  var params = {
    TableName: DynamoTables.USER,
    Key: {
      primaryEmail,
    },
  };
  const data = await dynamoClient.get(params).promise();
  return data.Item as any;
};

export const saveUser = async (user: User) => {
  const dynamoClient = getDynamoClient();
  var params = {
    TableName: DynamoTables.USER,
    Item: user,
  };
  await dynamoClient.put(params).promise();
  return user;
};
