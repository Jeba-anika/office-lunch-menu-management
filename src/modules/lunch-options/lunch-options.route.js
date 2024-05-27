const express = require('express')
const { createMenuController, getAllMenusController, getSingleMenuController, updateMenuController } = require('./lunch-options.controller')
const router = express.Router()


router.post('/create-menu', createMenuController)
router.get('/:lunchOptionId', getSingleMenuController)
router.put('/:lunchOptionId', updateMenuController)
router.get('/', getAllMenusController)

module.exports = router