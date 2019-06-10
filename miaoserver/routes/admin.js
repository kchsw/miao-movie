var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin')
/* GET users listing. */

router.use((req, res, next) => {
	if( req.session.username && req.session.isAdmin ){
		next()
	}else{
		res.send({
			msg: "没有管理权限",
			status: -1
		})
	}
})


router.get('/', adminController.index);
router.get('/userlist', adminController.userList)
router.post('/updetafreeze', adminController.updateFreeze)
router.post('/deleteuser', adminController.deleteUser)


module.exports = router;
