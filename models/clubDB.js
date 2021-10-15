var mysql = require('mysql')

var clubDB = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
})
clubDB.connect()


module.exports = clubDB