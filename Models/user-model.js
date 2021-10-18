const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema(
    {
    nama: { type:String},
    email: { type:String},
    alamat: { type:String},
    divisi: { type:String},
    tempat: { type:String},
    tgl: { type:String},
    hobby: { type:String},
    harapan: { type:String},
    gender: { type:String},
    status: { type:String},
    }
)

//nama database
const User = Mongoose.model('user', Schema)

module.exports = User
