const express = require('express');

const router = express.Router();

const Covid19dataModel = require('../models/covid19datamodel');
var query = {};

// var getiso_code = ""
// var getcontinent = ""


// Routes
router.get('/', (req, res) => {
    console.log("router.get: ", query);
    Covid19dataModel.find(query).limit(500)
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error!!!!!!!!!!!");
        });
});


router.post('/save', (req, res) => {
    const data = req.body;


    query.iso_code = data.iso_code;
    query.continent = data.continent;
    query.total_cases = data.total_cases;

    console.log("router.post: ", query);

    Covid19dataModel.find(query).limit(500)
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log("error!!!!!!!!!!!");
        });

    // const data = req.body;

    // const newCovid19dataModel = new Covid19dataModel(data);
    // newCovid19dataModel.save((error) => {
    //     if (error) {
    //         res.status(500).json({ msg: 'Sorry, internal server errors' });
    //         return;
    //     }
    //     // BlogPost
    //     return res.json({
    //         msg: 'Your data has been saved!!!!!!'
    //     });
    // });



});





module.exports = router;