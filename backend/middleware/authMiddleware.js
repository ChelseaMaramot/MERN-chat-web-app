const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');
const { runInNewContext } = require('vm');
dotenv.config();

// token will be valid for 30 mins
module.exports.generateToken = function(data){
    return jwt.sign(data,process.env.TOKEN_SECRET, {expiresIn: '1800s'})
}

module.exports.authenticateToken = function(req, res, next){
    // client sends Authorization: Basic token
    const authHeader = req.Header['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if (!token) {
        return res.status(401).json("token not found");
    }
    try{
        console.log(token);
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = data.username;
        req.email = data.email;
        req.password = data.password

        console.log("middleware is working");
        next();
    } catch (error){
        res.status(401).json("invalid token");
    }
};

