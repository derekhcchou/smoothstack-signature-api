import { middyfy } from '@libs/lambda';
import { APIGatewayEvent } from 'aws-lambda';
import { getConfig, saveConfig } from '../../service/config.service';

const config = async (event: APIGatewayEvent) => {
  try {
    switch (event.httpMethod) {
      case 'GET':
        return await getConfig();
      case 'POST':
        return await saveConfig(event.body as any);
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const main = middyfy(config);
