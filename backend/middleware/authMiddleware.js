const jwt = require('jsonwebtoken');
const crypto = require('crypto');

function generate_token(data){
    return jwt.sign(data,process.env.TOKEN_SECRET, {expiresIn: '1800s'})
}

module.exports.authenticateToken = function(req, res, next){
    crypto.randomBytes(64, (err, buf) => {
        if (err){
            console.log(err)
            return;
        }
        console.log(`The auth string is:`, buf.toString('hex'));
    }) 
};

