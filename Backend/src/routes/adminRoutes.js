const express=require('express');
const adminRouter=express.Router();
const Bookdata =require('../model/Bookdata')
var multer  = require('multer')
const path = require('path');
const storage=multer.diskStorage({
    destination: './public/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
 }

})
const upload = multer({ storage: storage })

// function router(nav){

// adminRouter.get('/',function(req,res){
// res.render('addBook',{
//     nav,
//     title:'Library'
//  })

// })
adminRouter.post('/add',function(req,res){
  var item={
    title:req.body.book.title,
    author:req.body.book.author,
    genre:req.body.book.genre,
    image:req.body.book.image
        }
      var book= Bookdata(item);
      book.save();
      // res.redirect('/books');

    });   
    
// adminRouter.get('/add',function(req,res){
//     var item={
// title:req.query.title,
// author:req.query.author,
// genre:req.query.genre,
// image:req.query.image
//     }
//   var book= Bookdata(item);
//   book.save();
//   res.redirect('/books');
// })   
// return adminRouter;
// }
module.exports=adminRouter;