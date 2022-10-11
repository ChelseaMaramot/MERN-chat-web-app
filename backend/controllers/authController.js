const asyncHandler = require('express-async-handler');
const User = require('../model/User');
const UserSchema = require('../model/User');

//Method: POST
exports.registerUser= asyncHandler(async(req, res) => {
    try{
        const { username, email, password } = req.body;

        const emailExists = await User.findOne({ email });

        if (emailExists){
            res.status(500);
            throw new Error ("Email Exists")
        }

        const newUser = await UserSchema.create(req.body);
        
        res.status(200).json(newUser);
    } catch(err){
        res.status(500).json(err);
    } 
});

//METHOD: GET
exports.loginUser= asyncHandler(async(req, res) => {
    try{
        
    } catch(err){
        res.status(500).json(err);
    } 
});
