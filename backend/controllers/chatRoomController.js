const RoomSchema = require('../model/Room');

// METHOD: POST
// Creates a new room 
exports.createRoom('/', async(req, res) => {
    try{
        const newRoom = await RoomSchema.create(req.body);
        console.log(newRoom);
    } catch(err){
        res.status(500).json(err);
        console.log(err.message);
    }
});

// METHOD: GET
// Gets the db records according to the conversationID
exports.getRoomID('/', async(req, res) => {
    try{
        const room = await RoomSchema.findOne({
            conversationID: req.params.conversationID,
        });
        console.log(room);
    } catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

