const router = require('express').Router();
const roomController = require('../controllers/chatRoomController')


router.post('/', roomController.createRoom);
router.get('/:conversationID', roomController.getRoomID);

module.exports = router;