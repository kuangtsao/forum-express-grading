const express = require('express')
const router = express.Router()
const admin = require('./module/admin')
const restController = require('../../controllers/apis/restaurant-controller')

const { authenticated } = require('../../middleware/auth')
router.use('/admin', admin)
router.get('/restaurants', authenticated, restController.getRestaurants)

module.exports = router
