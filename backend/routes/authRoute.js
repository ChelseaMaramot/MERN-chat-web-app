const router = require('express').Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register', authController.registerUser);
router.post('/login', authMiddleware.authenticateToken, authController.loginUser);

// just for testing
router.post('/loginTest', authController.loginUser)

module.exports = router;   

