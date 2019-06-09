const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
mongoose.set('useCreateIndex', true)

const UserSchema = new Schema({
	userId: { type: ObjectId },
	username: { type: String, require: true, index: { unique: true } },
	password: { type: String, require: true },
    email: { type: String, require: true, index: { unique: true } },
	date: { type: Date, default: Date.now() },
	isAdmin: { type: Boolean, default: false },
	isFreeze: { type: Boolean, default: false }
})

const UserModel = mongoose.model('user', UserSchema)
UserModel.createIndexes()

const save = (data) => {
	const user = new UserModel(data)
	return user.save()
			   .then(() => {
			   		return true
			   })
			   .catch(() => {
			   		return false
			   }) 
}

const loginFind = (data) => {
	return UserModel.findOne(data)
}

const updatePassword = (email, password) => {
	return UserModel.update({ email }, { $set: { password } })
					.then(() => {
						return true
					})
					.catch(() => {
						return false
					})
}

module.exports = {
	save,
	loginFind,
	updatePassword
}