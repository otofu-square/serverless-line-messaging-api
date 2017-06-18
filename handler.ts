export const hello = (event, context, callback): void => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      input: event
    })
  };

  console.log(
    JSON.stringify({
      input: event
    })
  );
  callback(null, response);
};
