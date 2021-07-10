const customers = require('../../lib/customers');

const handler = async (event) => {
  const { pathParameters: { id } } = event;

  const customer = customers.get().find(c => c.id === id);

  if (!customer) {
    return { statusCode: 404 };
  }

  customers.remove({ id });

  return { statusCode: 204 };
};

module.exports = {
  handler
};

