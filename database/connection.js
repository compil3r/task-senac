var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'bd_vitor',
        charset: 'utf8',
        port: 3306
     }
});
module.exports = knex