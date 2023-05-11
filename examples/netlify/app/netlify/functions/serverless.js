const { value } = require("pkg");

exports.handler = async () => {
  return { statusCode: 200, body: value };
};
