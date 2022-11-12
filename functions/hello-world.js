exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext;
  const mySecret = process.env.MY_SECRET;
  console.log(context);

  return {
    statusCode: 200,
    body: 'hello world '+mySecret+'!'+JSON.stringify(identity)+' :: '+JSON.stringify(user),
  };
};