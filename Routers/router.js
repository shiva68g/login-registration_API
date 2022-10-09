
const express = require('express');
const router = express.Router();
const db =  require('../models/models');
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


router.post('/register', async (req , res)=>{
	if(req.password == req.confirmpassord){
	
		let user = await db.fun_register(req.body);
		if(user){
			res.send('status ok');
		}
		else{
			res.send('email already exits');
		}
	}
	 	
})
router.post('/login', async (req , res)=>{
	// if(req.password == req.confirmpassord){
		let user = await db.fun_login(req.body)
		if(user == true){
			res.send('status ok');
		}
		else{
			res.send('email or password is worng');
		}
	// }
	
})

router.post('/update' , async (req , res)=>{
	
	 let user = await db.fun_user_update(req.body);
	 if(user == true){
			res.send('status ok');
		}
		else{
			res.send('email or password is worng');
		}
	
})


module.exports = router;