const { Email } = require('../utils/config')

const login = async (req, res, next) => {

}

const register = async (req, res, next) => {

}

const verify = async (req, res, next) => {
	const { email } = req.query

	let mailOptions = {
		from: '喵喵 1518887476@qq.com', // sender address
	    to: email, // list of receivers
	    subject: "喵喵验证码", // Subject line
	    text: "验证码:" + Email.verify, // plain text body
	}

	Email.transporter.sendMail(mailOptions, (err) => {
		if(err){
			console.log(err)
			res.send({
				msg: '验证码发送失败',
				status: -1
			})
		}else{
			res.send({
				msg: '验证码发送成功',
				status: 0
			})
		}
	})


	//授权码mpxasrsnkcjljhbf
}

const logout = async (req, res, next) => {

}

const getUser = async (req, res, next) => {

}

const findPassword = async (req, res, next) => {

}

module.exports = {
	login,
	register,
	verify,
	logout,
	getUser,
	findPassword
}