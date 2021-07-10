const customers = require('../../lib/customers');

const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(customers.get())
  };
};

module.exports = {
  handler
};

