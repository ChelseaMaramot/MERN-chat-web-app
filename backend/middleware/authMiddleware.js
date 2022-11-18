const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

// token will be valid for 30 mins
function generate_token(data){
    return jwt.sign(data,process.env.TOKEN_SECRET, {expiresIn: '1800s'})
}

module.exports.authenticateToken = function(req, res, next){
    // client sends Authorization: Basic token
    const authHeader = req.Header['authorization'];
    const token = authHeader && authHeader.split('')[1];

    if (!token) return res.status(401);
    console.log(token);

    /*
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err);
        if (err) return res.status(403);
        req.username = user
    })
    */

    /*
    crypto.randomBytes(64, (err, buf) => {
        if (err){
            console.log(err)
            return;
        }
        console.log(`The auth string is:`, buf.toString('hex'));
    }) 
    */
};

