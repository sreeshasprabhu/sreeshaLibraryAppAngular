
//Accessing mongoose package
const mongoose= require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/libraryang',{ useNewUrlParser: true, useUnifiedTopology: true });
//Schema definition
const Schema =mongoose.Schema
const AuthorSchema = new Schema({    
    name:String,
    genre:String,
    image:String
});
//model creation
var Authordata = mongoose.model('Authordata',AuthorSchema);
module.exports=Authordata;