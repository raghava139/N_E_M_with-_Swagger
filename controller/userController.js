const constants=require('../constants/index')
const userService=require('../service/userService')
module.exports.signup=async(req,res)=>{
    // res.send('controller is connected successfully')
//    console.log('==>',req.body)
let response={...constants.defaultServerResponse}
try{
    let responseFromServer=await userService.signup(req.body)
    response.status=200;
    response.message=constants.userMessage.SIGNUP_SUCCESS
    response.body=responseFromServer
}
catch(error){
    console.log('something went wrong in (user_controller)',error)
    response.message=error.message
}
return res.status(response.status).send(response)
}


//login
module.exports.login=async(req,res)=>{
    // res.send('controller is connected successfully')
//    console.log('==>',req.body)
let response={...constants.defaultServerResponse}
try{
    let responseFromServer=await userService.login
    response.status=200;
    response.message=constants.userMessage.LOGIN_SUCCESS
    response.body=responseFromServer
}
catch(error){
    console.log('something went wrong in (user_controller)',error)
    response.message=error.message
}
return res.status(response.status).send(response)
}
