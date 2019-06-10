const crypto = require('crypto')
const captcha = require('trek-captcha')

const setCrypto = (info) => {
	return crypto.createHmac('sha256', '#432d^%#')
                   .update(info)
                   .digest('hex');
}

const createVerify = (req, res) => {
	return captcha().then((info) => {
		req.session.verifyCode = info.token
		console.log(req.session.verifyCode)
		return info.buffer
	}).catch(() => {
		return false
	})
}

module.exports = {
	setCrypto,
	createVerify
}