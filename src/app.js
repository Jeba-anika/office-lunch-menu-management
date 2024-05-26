const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log("Hello world!")
    res.send('Hello world!')
})

module.exports = app