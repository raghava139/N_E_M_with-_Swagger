const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')
const joiSchemaValidation=require('../middleware/joiSchemaValidation')
const userSchema=require('../apiSchema/userSchema')

//signup
router.post('/signup',joiSchemaValidation.validateBody(userSchema.signup),userController.signup)

//login
router.post('/login',joiSchemaValidation.validateBody(userSchema.login),userController.login)

module.exports=router