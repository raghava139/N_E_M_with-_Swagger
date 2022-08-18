const User=require('../database/models/userModel')
const constants =require('../constants')
const {formatMongoData}=require('../Helper/dbHelper')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')

//SIGN-UP
module.exports.signup=async({email,password})=>{
    try{
        const user= await User.findOne({email})
        //if user is already there means it will throw an error
        if(user){
            throw new Error(constants.userMessage.DUPLICATE_EMAIL)
        }
        password=await bcrypt.hash(password,12)
        const newUser=new User({email,password})
        let result=await newUser.save();
        return formatMongoData(result);
    }
    catch(error){
        console.log('something went wrong',error)
        throw new Error(error)
    }
}


//LOGIN
module.exports.login=async({email,password})=>{
    try{
        const user= await User.findOne({email})
        // console.log(user)
        //if user is already there means it will throw an error
        if(!user){
            throw new Error(constants.userMessage.USER_NOT_FOUND)
        }
      const isValid=await bcrypt.compare(password,user.password)
    //   console.log(isValid)
        if(!isValid)
        {
            throw new Error(constants.userMessage.INVALID_PASSWORD)
        }
    
        const token=jwt.sign({id:user._id},process.env.SECRET_KEY||"my-secret-key",{expiresIn:'1d'})
        // console.log(token)

        return{token:token};
    }
    catch(error){
        console.log('something went wrong',error)
        throw new Error(error)
    }
}