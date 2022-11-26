const UserSchema = require('../model/User');
const asyncHandler = require('express-async-handler');

//api/user?search=username
exports.getUsers = asyncHandler(async(req, res) => {
    try{
        const username = req.query.search ? {
            $or: [
                {username: { $regex: req.query.search, $options: "i" }},
                {email: { $regex: req.query.search, $options: "i" }}
            ]
        } : {};
        
        const users = await UserSchema.find(username);
        res.send(users);
        //console.log(users);
    } catch(err){
        res.status(500).json(err);
    } 
});