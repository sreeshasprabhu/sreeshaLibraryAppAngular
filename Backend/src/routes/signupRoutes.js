const express=require('express');
const signupRouter =express.Router();
const Userdata =require('../model/Userdata')

// function router(nav){
signupRouter.get('/',function (req,res){
    res.render("signup",
    {
       nav,
       title:'Library',
       
    });    
 });
 signupRouter.post('/',function(req,res){
   console.log(req.body);
   var item={

   firstname:req.body.user.firstname,
	lastname:req.body.user.lastname,
	email:req.body.user.email,
	password:req.body.user.password,
	
	phone:req.body.user.phone
    
         }
       var user= Userdata(item);
       user.save();
      //  res.redirect('/signin');
 
     });   
//  return signupRouter;
// }
 module.exports=signupRouter;