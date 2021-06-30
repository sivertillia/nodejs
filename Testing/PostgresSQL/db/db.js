const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "toor",
    host: "127.0.0.1",
    port: 5432,
    database: "team1_api"
});

module.exports = pool