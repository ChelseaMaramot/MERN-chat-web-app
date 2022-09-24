const router = require('express').Router();
const messagesController = require('../controllers/messagesController')

router.post('/', messagesController.sendMessage);
router.get('/:conversationID', messagesController.getMessages);

module.exports = router;   

