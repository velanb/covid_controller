const express = require('express')
let router = express.Router()

//Import controllers
const {addVehicles} = require('./controllers');


router.route('/add').post(addVehicles);




module.exports = router;