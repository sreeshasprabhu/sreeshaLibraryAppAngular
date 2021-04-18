const express=require('express');
const authorsRouter =express.Router();
const Authordata = require('../model/Authordata')
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

// var authors=[
//     {
//         name:'William Shakespeare',            
//         genre:'English playwright',
//         img:"william.jpg"    
//     },
//     {   name:'Emily Dickinson',            
//         genre:'American poet',
//         img:"emily.jpg"    
//     },
//     {   name:'Charles Dickens',            
//         genre:'Novelist',
//         img:"charles.jpg"   
//     },
//     {   name:'William Blake',            
//         genre:' English poet',
//         img:"blake.jpg"   
//     }
    
// ]

authorsRouter.get('/',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  Authordata.find()
              .then(function(authors){
                  res.send(authors);
              });
});
//  authorsRouter.get('/:id',function (req,res){
//     const id= req.params.id;
//     Authordata.findOne({_id:id})
//     .then(function(author){
//       res.render("author",
//       {
//          nav,
//         title:'Library',
//         author
//      });
//     })
//   });
//   authorsRouter.get('/edit/:id',upload.single('image'),function (req,res){
//     const id= req.params.id;
//     Authordata.findOneAndUpdate({_id:id},req.body)
//     .then(function(author){
//         res.render("updateAuthor",{
//           nav,
//           title:'Library',
//           author
//        });
//       })
//     });
//   authorsRouter.post('/edit/:id',upload.single('image'),function (req,res){
//     const id= req.params.id;
//     Authordata.findByIdAndUpdate({_id:id},{
//        name:req.body.name,
//        genre:req.body.genre,       
//        image:req.file.filename
//     })
//     .then(function(author){
//         res.redirect("/authors");        
//       })
//     })
//     authorsRouter.get('/delete/:id',function (req,res){
//        const id= req.params.id;
//        Authordata.findOneAndDelete({_id:id},req.body)
//        .then(function(author){
//            res.redirect("/authors");        
//          })
//        })
//        return authorsRouter;
// }
 module.exports=authorsRouter;