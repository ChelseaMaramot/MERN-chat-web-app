const router = require('express').Router();
const { sensitiveHeaders } = require('http2');
const MessageSchema = require('../model/Message.js');

router.post("/", async(req, res) => {
    //const message = new MessageSchema(req.body);
    const {sender, message, conversationID} = req.body;

    /*
    if (!message || !conversationID || !sender){
        return res.json({error: "Missing data"});
    }
    */
    const newMessage = new MessageSchema(req.body);

    try{
        const saveMessage = await newMessage.save();
        res.status(200).json(saveMessage);
        console.log(req.body);
    } catch (err){
        res.status(500).json(err);
    }
    
    
});


router.get('/', async(req, res) => {

});

module.exports = router; 


 
 