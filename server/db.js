const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password:"asdQWE123",
  host: "localhost",
  port: 5432,
  database: "contacts",
});

module.exports = pool;
