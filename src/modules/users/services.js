const User = require('./models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createUser = async(userObject) => {
    let {email, userName, password, country, state, city, timeZone} = userObject;

    try {
        let user = await User.where({email: email}).findOne()
        if(!user){
            let saltRounds = 10;
            let encryptedPassword = await bcrypt.hash(password, saltRounds); 
            let dbObj = Object.freeze({
                username: userName,
                email: email,
                password: encryptedPassword,
                country: country,
                state: state,
                city: city,
                timeZone: timeZone
            })
            await User.create(dbObj)
            return { status: true, message: `User created successfully`}
        } else {
            return {status: true, message: `User already Exists`}
        }
    } catch (error) {
        throw error
    }
}


exports.loginUser = async(username, password) => {
    try {
        let user = await User.where({email: username}).findOne()
        if(user){
           let status = await bcrypt.compare(password, user.password );
           if(status){
               let userPayload = {
                   id: user._id,
                   username: user.username
               };
               let token = await jwt.sign(userPayload, 's3cr3t');
               return { status: true, message: `User authenticated successfully`, auth: token}
           } else {
               return { status: false, message: `Incorrect Username or Password`}
           }
        } else {
            return { status: false, message: `Incorrect Username or Password`}
        }
    } catch (error) {
        throw error
    }
}