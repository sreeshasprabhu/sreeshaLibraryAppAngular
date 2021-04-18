
//Accessing mongoose package
const mongoose= require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/libraryang',{ useNewUrlParser: true, useUnifiedTopology: true });
//Schema definition
const Schema =mongoose.Schema
const BookSchema = new Schema({

    title:String,
    author:String,
    genre:String,
    image:String
});
//model creation
var Bookdata = mongoose.model('Bookdata',BookSchema);
module.exports=Bookdata;