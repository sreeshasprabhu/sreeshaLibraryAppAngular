const express=require('express');

const app=new express();
const jwt=require('jsonwebtoken');
const cors = require('cors');
app.use(cors());

 
 const booksRouter =require('./src/routes/bookRoutes');
 const authorsRouter =require('./src/routes/authorRoutes');
 const signupRouter =require('./src/routes/signupRoutes');
 const signinRouter =require('./src/routes/signinRoutes');
 const adminRouter =require('./src/routes/adminRoutes');
 const addAuthorRouter =require('./src/routes/addAuthorRoutes');
 const welcomeRouter = require('./src/routes/welcomeRoutes');
 
 
 
 
  
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use('/books',booksRouter);
 app.use('/authors',authorsRouter);
 app.use('/signup',signupRouter);
 app.use('/signin',signinRouter);
 app.use('/admin',adminRouter);
 app.use('/addauthor',addAuthorRouter);
 app.use('/welcome',welcomeRouter);

 
 
 
 
 //res.render is used instead of res.sendfile to send file as a response to a client request
 app.get('/',function (req,res){
    // res.sendFile(__dirnameb+'/src/views/index.html');
   //  res.render("index",
   //  {
   //     nav,
   //     title:'Library'
   //  });    
   console.log("index")
 });
 
 
 
 app.listen(5000);