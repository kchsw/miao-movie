const mongoose = require('mongoose')

const nodemailer = require("nodemailer");


const Mongoose = {
	url: 'mongodb://localhost/miao-db',
	connect(){
		mongoose.connect(this.url, { useNewUrlParser: true }, (err) => {
			if(err){
				console.log('数据库连接失败')
				return
			}
			console.log('数据库连接成功')
		})
	}
}

const Email = {
	config: {
		host: "smtp.qq.com",
	    port: 587,
	    auth: {
	      user: '1518887476@qq.com', // generated ethereal user
	      pass: 'mpxasrsnkcjljhbf' // generated ethereal password
	    }
	},
	get transporter(){
		return nodemailer.createTransport(this.config)
	},

	get verify(){
		return Math.random().toString().slice(2,8)
	},
	get time(){
		return Date.now()
	}
}

const avatar = {
	BASE_URL: 'http://localhost:3000/uploads/'
}

module.exports = {
	Mongoose,
	Email,
	avatar
}