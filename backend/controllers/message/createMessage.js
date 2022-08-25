const Message = require("../../model/Message.js");
const asyncHandler = require("express-async-handler");

// post 
module.exports = asyncHandler(async (req, res) => {
    const message = new Message(req.body);
    await message.save();
});