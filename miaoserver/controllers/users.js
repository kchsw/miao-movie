const { Email, avatar } = require('../utils/config')
const { setCrypto, createVerify } = require('../utils/base')
const fs = require('fs')
const url = require('url')
const UserModel = require('../models/users')

const login = async (req, res, next) => {
	const { username, password, verifyCode } = req.body

	if(verifyCode !== req.session.verifyCode){
		res.send({
			msg: "验证码错误",
			status: -2
		})
		return 
	}

	const result = await UserModel.loginFind({
		username,
		password: setCrypto(password)
	})

	if(result){
		req.session.username = username
		req.session.isAdmin = result.isAdmin
		req.session.avatar = result.avatar
		if(result.isFreeze){
			res.send({
			 	msg: '账号已冻结',
				status: -2
			})
		}else{
			res.send({
				msg: '登陆成功',
				status: 0
			})
		}
	}else{
		res.send({
			msg: '登陆失败',
			status: -1
		})
	}
}

const register = async (req, res, next) => {
	const { username, password, email, verify } = req.body
	if(email !== req.session.email && verify !== req.session.verify){
		res.send({
			msg: '验证码错误',
			status: -1
		})
		return 
	}

	if((Email.time - req.session.time) / 1000 > 60){
		res.send({
			msg: '验证码过期',
			status: -3
		})
		return 
	}

	const result = await UserModel.save({
		username,
		password: setCrypto(password),
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
	req.session.time = Email.time

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
				isAdmin: req.session.isAdmin,
				avatar: req.session.avatar
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
		if((Email.time - req.session.time) / 1000 > 60){
			res.send({
				msg: '验证码过期',
				status: -3
			})
			return 
		}
		const result = await UserModel.updatePassword(email, setCrypto(password))
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
 
const verifyCode = async (req, res, next) => {
	const result = await createVerify(req, res, next)
	if(result){
		res.send(result)
	}
}

const uploadAvatar = async (req, res, next) => {
	fs.rename('public/uploads/' + req.file.filename, 'public/uploads/' + req.session.username + '.jpg', (err) => {
	})
	const result = await UserModel.updateAvatar(req.session.username, url.resolve(avatar.BASE_URL, req.session.username + '.jpg'))
	if(result){
		res.send({
			msg: '头像修改成功',
			status: 0,
			data: {
				avatar: url.resolve(avatar.BASE_URL, req.session.username + '.jpg?' + Math.random())
			}
		})
	}else{
		res.send({
			msg: '头像修改失败',
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
	findPassword,
	verifyCode,
	uploadAvatar
}