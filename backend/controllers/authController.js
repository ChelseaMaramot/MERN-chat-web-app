const asyncHandler = require('express-async-handler');
const UserSchema = require('../model/User');

//Method: POST
exports.registerUser= asyncHandler(async(req, res) => {
    try{
        const { username, email, password } = req.body;
        const emailExists = await UserSchema.findOne({ email });

        if (emailExists){
            res.status(500);
            throw new Error ("Email already exists")
        }
        const newUser = await UserSchema.create(req.body);
        //console.log(newUser);

        res.status(200).json(newUser);
    } catch(err){
        res.status(500).json(err);
    } 
});


//METHOD: POST
exports.loginUser= asyncHandler(async(req, res, next) => {
    try {
        const user = await UserSchema.findOne({
            email: req.body.email,
            password: req.body.password
        });

        //console.log("logging in...");
        //console.log(user);

        !user && res.status(404).json("User not found");
        res.status(200).json(user);
        
    } catch(err){
        res.status(500).json(err);
    }
});
