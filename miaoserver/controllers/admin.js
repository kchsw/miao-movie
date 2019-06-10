const UserModel = require('../models/users')

const index = async (req, res, next) => {
	res.send({
		msg: "管理员权限",
		status: 0
	})
}

const userList = async (req, res, next) => {
	const result = await UserModel.userList()
	if(result){
		res.send({
			msg: '所有用户信息',
			status: 0,
			data: {
				userList: result
			}
		})
	}else{
		res.send({
			msg: '获取用户信息失败',
			status: -1
		})
	}
}

const updateFreeze = async (req, res, next) => {
	const { email, isFreeze } = req.body
	const result = await UserModel.updateFreeze(email, isFreeze)
	if(result){
		res.send({
			msg: '用户冻结操作成功',
			status: 0,
		})
	}else{
		res.send({
			msg: '用户冻结操作失败',
			status: -1
		})
	}
}

const deleteUser = async (req, res, next) => {
	const { email } = req.body
	const result = await UserModel.deleteUser(email)
	if(result){
		res.send({
			msg: '删除用户成功',
			status: 0,
		})
	}else{
		res.send({
			msg: '删除用户失败',
			status: -1
		})
	}

}



module.exports = {
	index,
	userList,
	updateFreeze,
	deleteUser
}