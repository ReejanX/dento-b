const Pool = require('pg').Pool;

const pool = new Pool({
   user : 'postgres',
   password : 'silicon',
   host : 'localhost',
   port : '5432',
   database : 'reejansunshrestha'
});

module.exports = pool;