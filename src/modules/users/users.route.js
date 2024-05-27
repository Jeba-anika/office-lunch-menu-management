const { createUserController } = require('./users.controller')

const express = require('express')
const router = express.Router()

router.post('/register', createUserController)


module.exports = router