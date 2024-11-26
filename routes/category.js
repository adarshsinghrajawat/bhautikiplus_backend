var express = require('express');
var router = express.Router();
var pool = require("./pool")
var upload = require("./multer");

/* GET home page. */

router.post('/submit_category', upload.single('logo'), function (req, res, next) {
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


router.get('/fetch_category_subcategory', function (req, res, next) {
   
    pool.query("select * from categories ",function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data:result })
        }
    })
});

router.get('/fetch_category', function (req, res, next) {
    console.log(req.body)
    pool.query("select categoryname from categories ",function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data:result })
        }
    })
});

router.get('/fetch_category_', function (req, res, next) {
    console.log(req.body)
    pool.query("select * from categories ",function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data:result })
        }
    })
});

router.post('/submit_subcategory', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("insert into subcategory(categoryid,subcategoryname,logo) values(?,?,?) ", [req.body.categoryname,req.body.subcategoryname, req.file.filename], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Registered Successfully' })
        }
    })
});


router.post('/submit_team', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("insert into team (facultyname,collegename,post,description,logo,createdat,updateat) values(?,?,?,?,?,?,?) ", [req.body.facultyname,req.body.collegename,req.body.post,req.body.description, req.file.filename, req.body.createdat, req.body.updateat], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Registered Successfully' })
        }
    })
});

router.get('/fetch_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team ",function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data:result })
        }
    })
});




module.exports = router;
