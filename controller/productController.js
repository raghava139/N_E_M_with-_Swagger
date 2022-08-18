const productService=require('../service/productService')
const constants=require('../constants')
module.exports.createProduct=async(req,res)=>{
    // res.send('controller is connected successfully')
//    console.log('==>',req.body)
let response={...constants.defaultServerResponse}
try{
    let responseFromServer=await productService.createProduct(req.body)
    response.status=200;
    response.message=constants.productMessage.PRODUCT_CREATED
    response.body=responseFromServer
}
catch(error){
    console.log('something went wrong in productController',error)
    response.message=error.message
}
return res.status(response.status).send(response)
}


///get all products
module.exports.getAllProducts=async(req,res)=>{
    // res.send('controller is connected successfully')
//    console.log('==>',req.body)
let response={...constants.defaultServerResponse}
try{
    let responseFromServer=await productService.getAllProducts(req.query)
    response.status=200;
    response.message=constants.productMessage.PRODUCT_FETCHED
    response.body=responseFromServer
}
catch(error){
    console.log('something went wrong in productController',error)
    response.message=error.message
}
return res.status(response.status).send(response)
}

//get single Id product
module.exports.getProductById=async(req,res)=>{
    // res.send('controller is connected successfully')
//    console.log('==>',req.body)
let response={...constants.defaultServerResponse}
try{
    let responseFromServer=await productService.getProductById(req.params)
    response.status=200;
    response.message=constants.productMessage.PRODUCT_FETCHED
    response.body=responseFromServer
}
catch(error){
    console.log('something went wrong in productController',error)
    response.message=error.message
}
return res.status(response.status).send(response)
}

//update product 
module.exports.updateProduct=async(req,res)=>{
    // res.send('controller is connected successfully')
//    console.log('==>',req.body)
let response={...constants.defaultServerResponse}
try{
    let responseFromServer=await productService.updateProduct(
        {id:req.params.id,
        updateInfo:req.body
        }
        )
    response.status=200;
    response.message=constants.productMessage.PRODUCT_UPDATED
    response.body=responseFromServer
}
catch(error){
    console.log('something went wrong in productController',error)
    response.message=error.message
}
return res.status(response.status).send(response)
}

//delete product
module.exports.deleteProduct=async(req,res)=>{
    // res.send('controller is connected successfully')
//    console.log('==>',req.body)
let response={...constants.defaultServerResponse}
try{
    let responseFromServer=await productService.deleteProduct(req.params)
    response.status=200;
    response.message=constants.productMessage.PRODUCT_DELETED
    response.body=responseFromServer
}
catch(error){
    console.log('something went wrong in productController',error)
    response.message=error.message
}
return res.status(response.status).send(response)
}