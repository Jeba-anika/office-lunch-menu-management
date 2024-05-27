const { createUserController, loginUserController } = require('./users.controller')

const express = require('express')
const router = express.Router()

router.post('/register', createUserController)
router.post('/login', loginUserController)


module.exports = router