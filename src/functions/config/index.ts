import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'config',
        cors: {
          origin: '*',
          headers: ['Content-Type'],
        },
      },
    },
    {
      http: {
        method: 'post',
        path: 'config',
        cors: {
          origin: '*',
          headers: ['Content-Type'],
        },
      },
    },
  ],
};
