var mysql = require('mysql')
var clubDB = mysql.createConnection({
    host     : 'localhost',
    user     : 'shandy',
    password : 'passpass',
    database : 'club_db'
})
clubDB.connect()


module.exports = clubDB