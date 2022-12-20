import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user',
        cors: {
          origin: '*',
          headers: ['Content-Type'],
        },
      },
    },
    {
      http: {
        method: 'post',
        path: 'user',
        cors: {
          origin: '*',
          headers: ['Content-Type'],
        },
      },
    },
  ],
};
