import { middyfy } from '@libs/lambda';
import { APIGatewayEvent } from 'aws-lambda';
import { getUser, saveUser } from '../../service/user.service';

const user = async (event: APIGatewayEvent) => {
  try {
    switch (event.httpMethod) {
      case 'GET':
        return await getUser(event.queryStringParameters.primaryEmail);
      case 'POST':
        return await saveUser(event.body as any);
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const main = middyfy(user);
