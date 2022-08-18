// console.log('raghava')
const express=require('express')
const doteEnv=require('dotenv')
const cors=require('cors')
const swaggerUi=require('swagger-ui-express')
const YAML= require('yamljs')
const swaggerDocument=require('./swagger.yaml')
const dbConnection=require('./database/connection')
//dotenv.config() ----It will loop in your project folder(or)files called as dotenv using .env file
doteEnv.config()
// console.log(doteEnv)
// console.log(doteEnv.config())

//mongodb database
dbConnection()

//third party middleware---cors()
const app=express()
app.use(cors())

//Built in middleware function
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/product',require('./routes/productRoutes'))
//user signup
app.use('/api/v1/user',require('./routes/userRoutes'))
//Api Documentation(using Swagger)
if(!process.env.NODE_ENV!='production'){
    app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
}

// const MyMiddleware=(req,res,next)=>{
//     console.log("My MiddleWare function")
//     // next();
//     next()
// }
// app.use(MyMiddleware)
//or
// sub-stack middleware
// app.get('/',MyMiddleware,(req,res,next)=>{
//     res.send('This is our Laptop')
// })
app.get('/',(req,res,next)=>{
    res.send('Active Now')
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`My Server is running successfully in  http://localhost:${PORT}`)
})
//error handling
// it is used for runtime cath errors
//global error handling middle ware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({
        status:500,
        message:error.message,
        body:{}
    })
})