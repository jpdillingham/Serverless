const customers = require('../../lib/customers');
const { logEvent } = require('../../lib/log');

const handler = async (event) => {
  logEvent(event);
  
  const { pathParameters: { id } } = event;

  const customer = customers.get().find(c => c.id === id);

  if (!customer) {
    return { statusCode: 404 };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(customer)
  };
};

module.exports = {
  handler
};