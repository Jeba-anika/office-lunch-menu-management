const express = require('express')
const { createMenuController, getAllMenusController, getSingleMenuController, updateMenuController, deleteMenuController } = require('./lunch-options.controller')
const router = express.Router()


router.post('/create-menu', createMenuController)
router.get('/:lunchOptionId', getSingleMenuController)
router.put('/:lunchOptionId', updateMenuController)
router.delete('/:lunchOptionId', deleteMenuController)
router.get('/', getAllMenusController)

module.exports = router