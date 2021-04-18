const express=require('express');
const signinRouter =express.Router();
const Userdata =require('../model/Userdata')
const jwt=require('jsonwebtoken');
// function router(nav){
signinRouter.get('/',function (req,res){
    res.render("signin",
    {
       nav,
       title:'Library',
       
    });    
 });
 signinRouter.post('/', (req, res) =>{
	console.log(req.body);
	Userdata.findOne({ email: req.body.email }, (err, data) => {
		if (data) {

			if (data.password == req.body.password) {
				//console.log("Done Login");
				//req.session.userId = data._id;
				//console.log(req.session.userId);
				// res.send({ "Success": "Success!" });
				let payload={subject:data.firstname+data.password}
                let token =jwt.sign(payload,'secretkey')
				res.status(200).send({token});
			} else {
				//res.send({ "Success": "Wrong password!" });
				res.status(401).send('Wrong password');

			}
		} else {
			//res.send({ "Success": "This Email Is not regestered!" });
			res.status(401).send('This Email Is not regestered');

		}
	});
});
//  return signinRouter;
// }
 module.exports=signinRouter;