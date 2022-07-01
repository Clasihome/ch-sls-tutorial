'use strict';

exports.hello = async (event) => {
  const { name } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Good afternoon" + " " + name })
  };
};
