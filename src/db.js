const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'office-lunch-menu',
    password: 'postgres',
    port: 5432,
})

module.export = pool