const express=require('express');
const welcomeRouter =express.Router();

function router(nav1){
welcomeRouter.get('/',function (req,res){
    res.render("welcome",
    {
       nav1,
       title:'Library',
       
    });    
 });
 
      
 return welcomeRouter;
}
 module.exports=router;