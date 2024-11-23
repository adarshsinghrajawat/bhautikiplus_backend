var express = require('express');
var router = express.Router();
var pool = require("./pool")
var upload = require("./multer");

/* GET home page. */

router.post('/submit_subcategory', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("insert into categories (categoryname,logo,createdat,updateat) values(?,?,?,?) ", [req.body.categoryname, req.file.filename, req.body.createdat, req.body.updateat], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Registered Successfully' })
        }
    })
});



