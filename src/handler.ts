import { APIGatewayEvent, Callback, Context } from 'aws-lambda';

export const hello = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): void => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ input: event }),
  };
  console.log(JSON.stringify({ input: event }));
  callback(undefined, response);
};
