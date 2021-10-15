
require('dotenv').config()


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

console.log('==============>',process.env.DB_HOST)

const clubRouter = require('./routes/club')
app.use('/clubs', clubRouter,)
const playerRouter = require('./routes/player')
app.use('/players', playerRouter)


app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})