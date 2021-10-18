const express = require('express')
const routes = express.Router()
const userController = require('../Controllers/user-controller.js')

//homepage
routes.get('/', userController.home)
//getAllByAPI
routes.get('/user-getAll', userController.getAll)
//page New User
routes.get('/user-tambah', userController.userTambah)
//post new user
routes.post('/user-newpost', userController.postNewUser)
//siswa detail
routes.get('/user-detail/:id', userController.userDetail)
//post update
routes.post('/user-upd/:id', userController.userUpd)

module.exports = routes
