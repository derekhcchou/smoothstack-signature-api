import { middyfy } from '@libs/lambda';
import { APIGatewayEvent } from 'aws-lambda';
import { getSignature } from '../../service/signature.service';

const signature = async (event: APIGatewayEvent) => {
  try {
    switch (event.httpMethod) {
      case 'GET':
        const data = await getSignature(event.queryStringParameters.primaryEmail);
        return {
          statusCode: 200,
          body: data,
          headers: {
            'Content-Type': 'text/html',
          },
        };
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const main = middyfy(signature);
