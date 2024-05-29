const express = require('express')
const { createMenuController, getAllMenusController, getSingleMenuController, updateMenuController, deleteMenuController } = require('./lunch-options.controller')
const authorizeEmployee = require('../../middlewares/authorizeEmployee')
const authorizeAdmin = require('../../middlewares/authorizeAdmin')
const authorizeUser = require('../../middlewares/authorizeUser')
const router = express.Router()


router.post('/create-menu', authorizeAdmin, createMenuController)
router.get('/:lunchOptionId', authorizeUser, getSingleMenuController)
router.put('/:lunchOptionId', authorizeAdmin, updateMenuController)
router.delete('/:lunchOptionId', authorizeAdmin, deleteMenuController)
router.get('/', authorizeUser, getAllMenusController)

module.exports = router