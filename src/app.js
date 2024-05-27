const cors = require('cors')
const express = require('express')
const UserRouter = require('./modules/users/users.route')
const LunchOptionsRouter = require('./modules/lunch-options/lunch-options.route')
const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/v1/users', UserRouter)
app.use('/api/v1/lunch-options', LunchOptionsRouter)



app.get('/', (req, res) => {
    console.log("Hello world!")
    res.send('Hello world!')
})

module.exports = app