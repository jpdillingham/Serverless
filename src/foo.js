"use strict";

module.exports.foo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "foo!!!",
      },
      null,
      2
    ),
  };
};
