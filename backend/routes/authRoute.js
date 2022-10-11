const router = require('express').Router();
const authController = require('../controllers/authController')

router.post('/register', authController.registerUser);
router.get('/login', authController.loginUser);

module.exports = router;   

