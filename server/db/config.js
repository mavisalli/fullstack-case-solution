const dotenv = require("dotenv");
const pg = require("pg");

dotenv.config();

const postgresClient = new pg.Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

module.exports = postgresClient;
