const express = require('express')
const { createMenuController } = require('./lunch-options.controller')
const router = express.Router()


router.post('/create-menu', createMenuController)

module.exports = router