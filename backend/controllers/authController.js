const asyncHandler = require('express-async-handler');
const { JsonWebTokenError } = require('jsonwebtoken');
const UserSchema = require('../model/User');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const bcrypt = require("bcrypt");

//Method: POST
exports.registerUser= asyncHandler(async(req, res) => {
    try{
        const { username, email, password } = req.body;
        const emailExists = await UserSchema.findOne({ email });

        if (emailExists){
            res.status(500);
            throw new Error ("Email already exists")
        }

        bcrypt.hash(password, 10).then((hash) => {
            req.body.password = hash;
        })

        const newUser = await UserSchema.create(req.body);
        res.status(200).json(newUser);
        
    } catch(err){
        res.status(500).json(err);
    } 
});


//METHOD: POST
exports.loginUser= asyncHandler(async(req, res, next) => {
    try {

        //Authentication
        const user = await UserSchema.findOne({
            email: req.body.email,
            //password: req.body.password
        });
        !user && res.status(404).json("User not found");
        
        const password = await bcrypt.compare(req.body.password, user.password);
        !password && res.status(400).json('invalid password');

        
        //Authorization
        const accessToken = authMiddleware.generateToken({"email": "Chelsea@yahoo.com", "password": "123"});
        //console.log(accessToken);
        console.log('middleware success!')
        res.status(200).json(req.body);
        
    } catch(err){
        res.status(500).json(err);
    }
});
