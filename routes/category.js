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

    pool.query("select * from categories ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_category', function (req, res, next) {
    console.log(req.body)
    pool.query("select categoryname from categories ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_category_', function (req, res, next) {
    console.log(req.body)
    pool.query("select * from categories ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.post('/submit_subcategory', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("insert into subcategory(categoryid,subcategoryname,logo) values(?,?,?) ", [req.body.categoryname, req.body.subcategoryname, req.file.filename], function (error, result) {
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
    pool.query("insert into team (departmentname,facultyname,collegename,post,description,logo,createdat,updateat) values(?,?,?,?,?,?,?,?) ", [req.body.departmentname, req.body.facultyname, req.body.collegename, req.body.post, req.body.description, req.file.filename, req.body.createdat, req.body.updateat], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Registered Successfully' })
        }
    })
});


router.get('/fetch_all_departments', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from departments  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team where departmentname=3  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_all_academicoperation_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team where departmentname=4  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_all_academicconsistency_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team where departmentname=5  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_all_contentdevelopment_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team where departmentname=6  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});


router.get('/fetch_all_accounts_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team where departmentname=8  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});



router.get('/fetch_all_pr&executive_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team where departmentname=9  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});



router.get('/fetch_all_infraandsecurity_team', function (req, res, next) {
    console.log(req.query)
    pool.query("select * from team where departmentname=10  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.post('/edit_team_data', function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("update team set departmentname=? facultyname=?,collegename=?,post=?,description=?,updateat=? where teamid=? ", [req.body.departmentname, req.body.facultyname, req.body.collegename, req.body.post, req.body.description, req.body.updateat, req.body.teamid], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Updated Successfully' })
        }
    })
});

router.post('/edit_team_logo', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("update team set logo=? where teamid=?", [req.file.filename, req.body.teamid], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Logo Updated' })
        }
    })
});


router.post('/delete_team_data', function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("delete from team where teamid=?", [req.body.teamid], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Deleted Successfully' })
        }
    })
});


router.post('/submit_review', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("insert into reviews (feedback,studentname,aboutstudent,logo,createdat,updateat) values(?,?,?,?,?,?) ", [req.body.feedback, req.body.studentname, req.body.aboutstudent, req.file.filename, req.body.createdat, req.body.updateat], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Submitted Successfully' })
        }
    })
});


router.get('/fetch_all_reviews', function (req, res, next) {

    pool.query("select * from reviews ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});






router.post('/submit_examdetails', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("insert into examdetails (departmentname,batch,programnames,joining,duration,examdate,logo,createdat,updateat) values(?,?,?,?,?,?,?,?,?) ", [req.body.departmentname, req.body.batch, req.body.programnames, req.body.joining, req.body.duration, req.body.examdate, req.file.filename, req.body.createdat, req.body.updateat], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Registered Successfully' })
        }
    })
});


router.get('/fetch_iitjeeexamdetails_XI', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=1 and batch=1 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});


router.get('/fetch_iitjeeexamdetails_XII', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=1 and batch=2 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_iitjeeexamdetails_droppers', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=1 and batch=3 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});



router.get('/fetch_neetexamdetails_XI', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=2 and batch=1 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});


router.get('/fetch_neetexamdetails_XII', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=2 and batch=2 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});

router.get('/fetch_neetexamdetails_droppers', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=2 and batch=3 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});


router.get('/fetch_foundationIX', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=11 and batch=4 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});


router.get('/fetch_foundationX', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=11 and batch=5 ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});


router.get('/fetch_onlineclass', function (req, res, next) {

    pool.query("select * from examdetails where departmentname=12  ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});



router.get('/fetch_all_batches', function (req, res, next) {

    pool.query("select * from batches ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});



router.post('/submit_result', upload.single('logo'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    pool.query("insert into result (departmentname,studentname,programname,marks,parentname,logo,createdat,updateat) values(?,?,?,?,?,?,?,?) ", [req.body.departmentname, req.body.studentname, req.body.programname, req.body.marks, req.body.parentname, req.file.filename, req.body.createdat, req.body.updateat], function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(200).json({ status: false, message: 'server error...' })
        }
        else {
            res.status(200).json({ status: true, message: 'Registered Successfully' })
        }
    })
});






router.get('/fetch_result', function (req, res, next) {

    pool.query("select * from result ", function (error, result) {
        if (error) {
            console.log("error", error)
            res.status(500).json({ status: false, message: 'server error...' })
        }

        else {
            res.status(200).json({ status: true, data: result })
        }
    })
});


router.post('/add_photos', upload.any(), function (req, res, next) {
    console.log(req.body)
    console.log(req.files)
    var file_str = ""
  
    req.files.map((item) => {
      file_str += item.filename + ","
  
    })

    pool.query("insert into gallery(eventname, images, createdat, updateat)values(?,?,?,?)", [req.body.eventname, file_str, req.body.createdat, req.body.updateat], function (error, result) {
        if (error) {
          console.log("xxxxx" + error)
          res.status(200).json({ status: false, message: 'Server error....' })
        }
        else {
          res.status(200).json({ status: true, message: 'Added Successfully' })
        }
    
      })
    
    });
    

    router.get('/fetch_photogallery', function (req, res, next) {

        pool.query("select images from gallery where galleryid=6  ", function (error, result) {
            if (error) {
                console.log("error", error)
                res.status(500).json({ status: false, message: 'server error...' })
            }
    
            else {
                res.status(200).json({ status: true, data: result })
            }
        })
    });


    router.post('/submit_contactus', function (req, res, next) {
        pool.query(
          "insert into contactus (name, email, message, createdat, updateat) values (?, ?, ?, ?, ?)", 
          [req.body.name, req.body.email, req.body.message, req.body.createdat, req.body.updateat],
          function (error, result) {
            if (error) {
              console.log("Error:", error);
              res.status(200).json({ status: false, message: 'Server error...' });
            } else {
              res.status(200).json({ status: true, message: 'Registered Successfully' });
            }
          }
        );
      });
      

    






module.exports = router;
