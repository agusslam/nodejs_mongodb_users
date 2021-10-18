const express = require('express')
const routes = express.Router()
const userController = require('../Controllers/user-controller.js')

routes.get('/', userController.home)

module.exports = routes
