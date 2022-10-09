const mongoose = require('mongoose');

const register = mongoose.Schema({
	name : String,
	email :{
    type: String,
    required: [true, "An email address is required."],
    match: /.+\@.+\..+/,
    unique: true
  },
	password:String
})


module.exports =  register 