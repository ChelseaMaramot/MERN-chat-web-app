const MessageSchema = require('../model/Message.js');
const asyncHandler = require('express-async-handler');

// METHOD: POST 
exports.sendMessage = asyncHandler(async(req, res) => {

    try{
        const newMessage = await MessageSchema.create(req.body);
        res.status(200).json(newMessage);
        console.log(req.body);
    } catch (err){
        res.status(500).json(err);
        console.log(err.message);
    }
});
 
// METHOD: GET
// requires the conversationID
// gets all the messages associated with the conversationID 
exports.getMessages = asyncHandler(async(req, res) => {
    try {
        const messages = await MessageSchema.find({
            conversationID: req.params.conversationID,
        });

        console.log(messages);
        res.status(200).json(messages);
    } catch(err){
        res.status(500).json(err);
        console.log(err)
    }
});


 
 