const express = require('express')
const router = express.Router()
const admin = require('./module/admin')
const restController = require('../../controllers/apis/restaurant-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')

const { authenticated } = require('../../middleware/auth')
router.use('/admin', admin)
router.get('/restaurants', authenticated, restController.getRestaurants)
router.use('/', apiErrorHandler)

module.exports = router
