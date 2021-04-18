const express=require('express');
const Bookdata = require('../model/Bookdata')
const booksRouter =express.Router();
var multer  = require('multer')
const path = require('path');
const { title } = require('process');
const storage=multer.diskStorage({
    destination: './public/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
 }

})
const upload = multer({ storage: storage })

// function router(){
//     var books=[
//     {title:'The God of Small Things',
//       author: 'Arundhati Roy',
//       genre:'Novel',
//       img:'godofsmallthings.jpg'
//     },
//     { title:'Cherry Tree',
//       author: 'Ruskin Bond ',
//       genre:'Story',
//       img:'cherrytree.jpg'       
//     },
//     { title:'Wings of Fire',
//     author: ' A. P. J. Abdul Kalam',
//     genre:'Autobiography',
//     img:'wingsoffire.jpg'            
//     },
//     {title:'Leo Tolstoy',
//     author: 'Anna Karenina',
//     genre:'Novel',
//     img:'anna.jpg'
//     }
//  ]
//  booksRouter.get('/',function (req,res){
   
//       res.render("books",
//       {
//          nav,
//          title:'Library',
//          books   
         
//       });    
//    });
    
//  booksRouter.get('/',function (req,res){
//     Bookdata.find()
//     .then(function(books){
//       res.render("books",
//     {
//        nav,
//        title:'Library',
//        books
//     });     
//     })
    
//  });
 booksRouter.get('/',function(req,res){
   res.header("Access-Control-Allow-Origin","*")
   res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
   Bookdata.find()
               .then(function(books){
                   res.send(books);
               });
});
booksRouter.get('/:id',function (req,res){
   const id= req.params.id;
   Bookdata.findOne({_id:id})
   .then(function(book){
      res.send(book);
   })
 });
 booksRouter.put('/update',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  console.log(req.body);
   const id=req.body._id,
  title=req.body.title,
  author=req.body.author,
  genre=req.body.genre,
  image=req.body.image
  
 Bookdata.findByIdAndUpdate({"_id":id},
                              {$set:{title: title,
                                 author:author,
                                  genre:genre,                                  
                                 image:image}})
 .then(function(){
     res.send();
 })
})
booksRouter.delete('/remove/:id',(req,res)=>{
 
  id=req.params.id;
  Bookdata.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.send();
  })
})
  
 // booksRouter.get('/single',function (req,res){
 //    res.send("Hey I am a Single Book");
 // });
//  booksRouter.get('/:id',function (req,res){
//     const id= req.params.id;
//     Bookdata.findOne({_id:id})
//     .then(function(book){
//       res.render("book",
//       {
//          nav,
//         title:'Library',
//         book
//      });
//     })
//   });
//   booksRouter.get('/edit/:id',upload.single('image'),function (req,res){
//    const id= req.params.id;
//    Bookdata.findOneAndUpdate({_id:id},req.body)
//    .then(function(book){
//        res.render("updateBook",{
//          nav,
//          title:'Library',
//          book
//       });
//      })
//    });
//    booksRouter.post('/edit/:id',upload.single('image'),function (req,res){
//       const id= req.params.id;
//       Bookdata.findByIdAndUpdate({_id:id},{
//          title:req.body.title,
//          genre:req.body.genre,
//          author:req.body.author,
//          image:req.file.filename
//       })
//       .then(function(book){
//           res.redirect("/books");        
//         })
//       })
//       booksRouter.get('/delete/:id',function (req,res){
//          const id= req.params.id;
//          Bookdata.findOneAndDelete({_id:id},req.body)
//          .then(function(book){
//              res.redirect("/books");        
//            })
//          })
//  return booksRouter;
// }
 module.exports=booksRouter;