const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/libraryang',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

userSchema = new Schema( {	
		
	firstname: String,
	lastname:String,
	email: String,
	password: String,
	
	phone:Number
})
var Userdata = mongoose.model('Userdata', userSchema);

module.exports = Userdata;