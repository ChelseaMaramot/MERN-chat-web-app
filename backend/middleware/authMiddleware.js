const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

// token will be valid for 30 mins
module.exports.generateToken = function(data){
    console.log(data);
    return jwt.sign(data,process.env.ACCESS_TOKEN_SECRET , {expiresIn: '1800s'})
}

module.exports.authenticateToken = function(req, res, next){
    // client sends Authorization: Basic token

    //console.log(generateToken(req.body));
    const authHeader = req.headers['authorization'];
    console.log(req.headers);
    const token = authHeader && authHeader.split(' ')[1]; //BEARER TOKEN
   
    if (!token) {
        return res.status(401).json("token not found");
    }
    
    try{
        // verify token
        console.log('token verified')
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if (err) return res.sendStatus(403).json("invalid token");
            req.email = data.email;
            req.password = data.password;
            next();
        });
    } catch (error){
        res.status(401).json("invalid token");
    }
    
};

