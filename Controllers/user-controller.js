const userModel = require('../Models/user-model')

exports.home = (req,res) => {
    res.render('index')
}