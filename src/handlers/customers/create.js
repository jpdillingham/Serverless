const customers = require('../../lib/customers');
const { logEvent } = require('../../lib/log');

const handler = async (event) => {
  logEvent(event);

  const { body } = event;
  const { id, name, address } = JSON.parse(body);

  const isValidCustomer = id && name && address;

  if (!isValidCustomer) {
    return { statusCode: 400 };
  }

  customers.add({ 
    customer: { id, name, address }
  });

  return { statusCode: 201 };
};

module.exports = {
  handler
};
