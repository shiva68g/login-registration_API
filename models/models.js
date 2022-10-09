const register = require('./schema')
const mongoose = require('mongoose');


let fun_register = async (body)=>{

	const db_register = mongoose.model('user' , register);
    const user = new db_register({name : body.name,email:body.email,password:body.password});
    await  user.save((err)=>{
            console.log(err)
    });
    return user;
}

let fun_login = async (body)=>{
    
    const db_register = mongoose.model('user' , register);
    const db_user = mongoose.model('user');
    const user = await db_user.findOne({
    	 email:body.email,
    	 password:body.password
    }).select("email").lean();
    if(user != null){
    	return true;
    }
    else{
    	return false;
    }
   
}

let fun_user_update = async (body)=>{
    
    const db_register = mongoose.model('user' , register);
    const db_user = mongoose.model('user');
    const user = await db_user.findOneAndUpdate({email:body.email} ,
    	{ name : body.name,email:body.email,password:body.password} ,
    	{ returnOriginal: false
        })
    if(user != null){
    	return true;
    }
    else{
    	return false;
    }
   
}




module.exports = {fun_register , fun_login , fun_user_update}