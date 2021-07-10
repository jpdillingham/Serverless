const customers = require('../../lib/customers');
const { logEvent } = require('../../lib/log');

const handler = async (event) => {
  logEvent(event);
  
  return {
    statusCode: 200,
    body: JSON.stringify(customers.get())
  };
};

module.exports = {
  handler
};

