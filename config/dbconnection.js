const mysql = require('mysql');
const database = 'ESTATISTICA';

const client = mysql.createConnection({
    user: 'root',
    password: 'root123',
    host: 'localhost',
    port: 3306,
    multipleStatements: true,
    debug: false
});

client.query('USE ' + database);

module.exports = client;