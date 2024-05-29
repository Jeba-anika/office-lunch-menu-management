const express = require('express')
const { createEmployeeChoiceController, getAllEmployeeChoicesController, getLunchChoiceOfSingleEmployeeController, updateLunchChoiceOfSingleEmployeeController } = require('./employee-choices.controller')
const authorizeEmployee = require('../../middlewares/authorizeEmployee')
const authorizeUser = require('../../middlewares/authorizeUser')
const authorizeAdmin = require('../../middlewares/authorizeAdmin')
const router = express.Router()

router.post('/', authorizeEmployee, createEmployeeChoiceController)
router.get('/:employeeId', authorizeUser, getLunchChoiceOfSingleEmployeeController)
router.put('/:choiceId', authorizeAdmin, updateLunchChoiceOfSingleEmployeeController)
router.get('/', authorizeAdmin, getAllEmployeeChoicesController)


module.exports = router