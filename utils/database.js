const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "doan1999",
    database: "payment",
    host: "localhost",
    port: 5432
});

module.exports =pool;