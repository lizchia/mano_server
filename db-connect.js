const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mano_db",
    waitForConnections: "true",
    connectLimit: 10,
    queneLimit: 0
});

module.exports = pool.promise();