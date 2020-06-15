const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logginig");
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation");

const port = process.env.PORT || 3001;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
