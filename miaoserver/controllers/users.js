const { Email } = require('../utils/config')
const UserModel = require('../models/users')

const login = async (req, res, next) => {
	const { username, password } = req.body

	const result = await UserModel.loginFind({
		username,
		password
	})

	if(result){
		req.session.username = username
		req.session.isAdmin = result.isAdmin
		res.send({
			msg: '登陆成功',
			status: 0
		})
	}else{
		res.send({
			msg: '登陆失败',
			status: -1
		})
	}
}

const register = async (req, res, next) => {
	const { username, password, email, verify } = req.body
	if(email === req.session.email && verify === req.session.verify){
		res.send({
			msg: '验证码错误',
			status: -1
		})
	}

	const result = await UserModel.save({
		username,
		password,
		email
	})

	if(result) {
		res.send({
			msg: '注册成功',
			status: 0
		})
	}else{
		res.send({
			msg: '注册失败',
			status: -2
		})
	}

}

const verify = async (req, res, next) => {
	const { email } = req.query
	const verify = Email.verify
	console.log(verify)

	req.session.verify = verify
	req.session.email = email

	console.log(req.session.verify)
	console.log(req.session.email)

	res.send({
		msg: '验证码发送成功',
		status: 0
	})
	
	// let mailOptions = {
	// 	from: '喵喵 1518887476@qq.com',
	//     to: email, 
	//     subject: "喵喵验证码",
	//     text: "验证码:" + verify, 
	// }

	// Email.transporter.sendMail(mailOptions, (err) => {
	// 	if(err){
	// 		console.log(err)
	// 		res.send({
	// 			msg: '验证码发送失败',
	// 			status: -1
	// 		})
	// 	}else{
	// 		res.send({
	// 			msg: '验证码发送成功',
	// 			status: 0
	// 		})
	// 	}
	// })


	//授权码mpxasrsnkcjljhbf
}

const logout = async (req, res, next) => {
	req.session.username = '',
	res.send({
		msg: '退出成功',
		status: 0
	})
}

const getUser = async (req, res, next) => {
	console.log(req.session.verify)
	if(req.session.username){
		res.send({
			msg: '获取用户信息成功',
			status: 0,
			data: {
				username: req.session.username,
				verify: req.session.verify,
				isAdmin: req.session.isAdmin
			}
		})
	}else{
		res.send({
			msg: '获取用户信息失败',
			status: -1,
		})
	}
}

const findPassword = async (req, res, next) => {
	const { email, password, verify } = req.body
	if(email === req.session.email && verify === req.session.verify){
		const result = await UserModel.updatePassword(email, password)
		if(result){
			res.send({
				msg: '修改密码成功',
				status: 0
			})
		}else{
			res.send({
				msg: '修改密码失败',
				status: -1
			})
		}
	}else{
		res.send({
			msg: '验证码错误',
			status: -1
		})
	}
}

module.exports = {
	login,
	register,
	verify,
	logout,
	getUser,
	findPassword
}