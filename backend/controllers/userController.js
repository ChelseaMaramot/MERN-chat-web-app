const UserSchema = require('../model/User');
const asyncHandler = require('express-async-handler');

//api/user?search=username
exports.getUsers = asyncHandler(async(req, res) => {
    try{
        const word = req.query.search;
        console.log(word)
    } catch(err){
        res.status(500).json(err);
    } 
});