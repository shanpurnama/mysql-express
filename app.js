const express = require('express')
const app = express()
const port = 3000

// var coba = require('./controllers/clubController')
// coba.clubsController('clubsController')


var bodyParser = require('body-parser')
app.use(bodyParser.json())

var clubRouter = require('./routes/club')
app.use('/clubs', clubRouter,)
var playerRouter = require('./routes/player')
app.use('/players', playerRouter)


app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})