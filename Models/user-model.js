const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema(
    {
    username:{ type:String },
    password: { type:String },
    nama: { type:String},
    email: { type:String},
    alamat: { type:String},
    divisi: { type:String},
    tempat: { type:String},
    tgl: { type:String},
    cita: { type:String},
    harapan: { type:String},
    }
)

//nama database
const User = Mongoose.model('user', Schema)

module.exports = User
