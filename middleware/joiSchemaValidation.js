const Joi=require('@hapi/joi')
const constants=require('../constants/index')

const validateObjectSchema=(data,schema)=>{
    // console.log(data)
    // console.log(schema)
    //convert is used for IF number is in string by default it will take the true value and you can write the true
    // const result=Joi.validate(data,schema,{convert:false})
    // console.log()
    const result=Joi.validate(data,schema,{convert:false})    
    if(result.error){
    const errorDetails=result.error.details.map((value)=>{
        return{
            error:value.message,
            path:value.path
        }
    });
    return errorDetails;
}
return null
    // console.log("result Checking::::",result)
    // console.log("result Checking::::",errorDetails)
}
module.exports.validateBody=(schema)=>{
    return(req,res,next)=>{
        let response={...constants.defaultServerResponse}
        // console.log(response)
        const error=validateObjectSchema(req.body,schema)
        console.log(error)
        if(error){
            response.body=error;
            response.message=constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response)
        }
        return next()

    }
}
module.exports.validateQueryParams=(schema)=>{
    return(req,res,next)=>{
        let response={...constants.defaultServerResponse}
        // console.log(response)
        const error=validateObjectSchema(req.query,schema)
        if(error){
            response.body=error;
            response.message=constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response)
        }
        return next()
    }
}