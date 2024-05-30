const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'office-lunch-menu',
    password: '5343',
    port: 5432,
})

module.exports = pool