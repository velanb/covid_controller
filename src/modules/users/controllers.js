const {createUser, loginUser} = require('./services')

exports.createUser = async(req, res, next) => {
    let {userName, email, password, country, state, city, timeZone } = req.body;
    try {
        let userObj = {
            userName, email, password, country, state, city, timeZone
        }
        let user = await createUser(userObj);
        res.json(user);
    } catch (error) {
        
    }
}

exports.loginUser = async(req, res, next) =>{
    let {username, password} = req.body;
    console.log(req.body)

    try {
        let response = await loginUser(username, password);
        res.json(response)
    } catch (error) {
        throw error
    }
} 