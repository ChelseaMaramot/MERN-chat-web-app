const asyncHandler = require('express-async-handler');
const UserSchema = require('../model/User');

//Method: POST
exports.registerUser= asyncHandler(async(req, res) => {
    try{
        
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
