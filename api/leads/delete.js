const handler = require("../leads.js");

module.exports = async function deleteHandler(req, res) {
  req.url = "/api/leads/delete";
  return handler(req, res);
};
