const express = require('express')
const { createEmployeeChoiceController } = require('./employee-choices.controller')
const router = express.Router()

router.post('/', createEmployeeChoiceController)


module.exports = router