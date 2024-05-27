const express = require('express')
const { createEmployeeChoiceController, getAllEmployeeChoicesController, getLunchChoiceOfSingleEmployeeController, updateLunchChoiceOfSingleEmployeeController } = require('./employee-choices.controller')
const router = express.Router()

router.post('/', createEmployeeChoiceController)
router.get('/:employeeId', getLunchChoiceOfSingleEmployeeController)
router.put('/:choiceId', updateLunchChoiceOfSingleEmployeeController)
router.get('/', getAllEmployeeChoicesController)


module.exports = router