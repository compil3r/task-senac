var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'mysql.railway.internal',
        user: 'root',
        password: 'hKGYgCttXaWRlhXmNsjrsTkHrfQHUEsF',
        database: 'railway',
        charset: 'utf8',
        port: 3306
     }
});
module.exports = knex
