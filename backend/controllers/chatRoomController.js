const RoomSchema = require('../model/Room');
const asyncHandler = require('express-async-handler');

// METHOD: POST
// Creates a new room 
exports.createRoom = asyncHandler(async(req, res) => {
    try{
        const newRoom = await RoomSchema.create(req.body);
        res.status(200).json(newRoom);
        //console.log(newRoom);
    } catch(err){
        res.status(500).json(err);
    } 
});

// METHOD: GET rooms according to id
// Gets the db records according to the conversationID
// will add param later
exports.getRoomID = asyncHandler(async(req, res) => {
    try{
        const room = await RoomSchema.find();
        res.status(200).json(room);
        //console.log(room);
        //console.log('got all the rooms')
    } catch(err){
        res.status(500).json(err);
    }
});


// METHOD: GET all rooms
exports.getAllRooms = asyncHandler(async(req, res) => {
    try{
        const room = await RoomSchema.find();
        res.status(200).json(room);
        //console.log(room);
        //console.log('got all the rooms')
    } catch(err){
        res.status(500).json(err);
    }
});

