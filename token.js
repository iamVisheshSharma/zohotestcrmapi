const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
	refresh_token: String,
	access_token:String
}, { timestamps: true } )

module.exports = mongoose.model('Token', tokenSchema)

