const winston = require("winston");

module.exports = function(err, req, res, next) {
  // error
  // warn
  // info
  // verbode
  // debug
  // silly
  winston.error("error", err.message); //, err);
  // winston.error(err.message);

  res.status(500).send("Something failed");
};
