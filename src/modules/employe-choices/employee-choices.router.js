const express = require('express')
const { createEmployeeChoiceController, getAllEmployeeChoicesController, getLunchChoiceOfSingleEmployeeController } = require('./employee-choices.controller')
const router = express.Router()

router.post('/', createEmployeeChoiceController)
router.get('/:employeeId', getLunchChoiceOfSingleEmployeeController)
router.get('/', getAllEmployeeChoicesController)


module.exports = router