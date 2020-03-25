const router = require('express').Router()
const {createUser, loginUser} = require('./controllers')

router.route('/create').post(createUser)

router.route('/login').get(loginUser)


module.exports = router;