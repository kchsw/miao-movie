var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })
const usersController = require('../controllers/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', usersController.login)
router.post('/register', usersController.register)
router.get('/verify', usersController.verify)
router.get('/logout', usersController.logout)
router.get('/getUser', usersController.getUser)
router.post('/findPassword', usersController.findPassword)
router.get('/verifyCode', usersController.verifyCode)
router.post('/uploadAvatar', upload.single('file'), usersController.uploadAvatar)

module.exports = router;
