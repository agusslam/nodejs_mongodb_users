const userModel = require('../Models/user-model')

//page home awal
exports.home = (req,res) => {
    res.render('index')
}

//response all data for fetch
exports.getAll = (req,res) => {
    userModel.find()
    .then(response => {
        res.send(
            {
                message: "Successfully Get All Data",
                result: response
            }
        )
    })
    .catch(err => {
        res.send(
            {
                message: `Failed Get All Data : ${err}`
            }
        )
    })
}

//page new user
exports.userTambah = (req,res) => {
    res.render('tambah')
}

//post new user
exports.postNewUser = (req,res) => {
    // res.send('tampilan create')
    const user = new userModel({
        nama : req.body.nama,
        email: req.body.email,
        alamat: req.body.alamat,
        divisi: req.body.divisi,
        tempat: req.body.tempat,
        tgl: req.body.tgl,
        cita: req.body.cita,
        harapan: req.body.harapan,
    })

    user.save(user)
        .then(response => {
            res.render('index', 
            {
                message: "Success Add Data"
            })
    }).catch(err => {
        res.send({
            message: `Failed : ${err}`
        })
    })
}

//viewby id
exports.userDetail = (req,res) => {
    userModel.findOne(
        {
            _id: req.params.id
        }
    ).then(response => {
        res.render('update', { data: response })        
    }).catch(err => {
        res.send({
            message: `Failed : ${err}`
        })
    })
}

//update
exports.userUpd = (req,res) => {
    // console.log(req.params.id)
    userModel.updateOne(
        { _id: req.params.id },
        { $set: 
            {
                nama : req.body.nama,
                email: req.body.email,
                alamat: req.body.alamat,
                divisi: req.body.divisi,
                tempat: req.body.tempat,
                tgl: req.body.tgl,
                cita: req.body.cita,
                harapan: req.body.harapan,
            }},
            {
                upsert: true
            }
    ).then(response => {
        res.render('index', {message: "Success Update Data"})
    }).catch(err => {
        res.send({
            message: `Failed Update data ${err}`
        })
    })
}

exports.userDel = (req,res) => {
    userModel.deleteOne(
        {
            _id: req.params.id
        }
    ).then(response => {
        res.render('index', {message: "Success Delete Data"})
    }).catch(err => {
        res.send({
            message: `Failed Delete ${err}` 
        })
    })
}