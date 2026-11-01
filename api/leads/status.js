const handler = require("../leads.js");

module.exports = async function statusHandler(req, res) {
  req.url = "/api/leads/status";
  return handler(req, res);
};
