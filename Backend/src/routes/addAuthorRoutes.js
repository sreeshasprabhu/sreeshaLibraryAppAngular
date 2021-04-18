const express = require('express');
const addAuthorRouter=express.Router();
const Authordata =require('../model/Authordata')
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
addAuthorRouter.get('/',function(req,res){
res.render('addAuthor',{
    nav,
    title:'Library'
 })

})
addAuthorRouter.post('/add',function(req,res){
  console.log(req.body);
    var item={
      
      name:req.body.author.name,
      genre:req.body.author.genre,
      image:req.body.author.image
          }
        var author= Authordata(item);
        author.save();
        // res.redirect('/authors');
  
      });   
  
// return addAuthorRouter;
// }

module.exports=addAuthorRouter;