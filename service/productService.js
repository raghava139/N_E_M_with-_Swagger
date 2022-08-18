const Product=require('../database/models/productModel')
const{formatMongoData,checkObjectId}=require('../Helper/dbHelper')
const constants=require('../constants/index')

module.exports.createProduct=async(serviceData)=>{
///same key value pairs
// let product=new Product({
//     name:serviceData.name,
// })
try{
    let product=new Product({...serviceData})
    // return await product.save()
    let result= await product.save()
    // return result.toObject()
    return formatMongoData(result)
}
catch(error){
    console.log('something went wrong',error)
}
}

///GET ALL PRODUCTS
module.exports.getAllProducts=async({skip=0,limit=10})=>{
///same key value pairs
// let product=new Product({
//     name:serviceData.name,
// })
try{
    let products=await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
// return await product.save()
             // let result= await product.save()
    // return result.toObject()
    return formatMongoData(products);
}
catch(error){
    console.log('something went wrong',error)
}
}

//get product by single Id
module.exports.getProductById=async({id})=>{
///same key value pairs
// let product=new Product({
//     name:serviceData.name,
// })
try{
    checkObjectId(id)
    let product =await Product.findById(id)
    if(!product){
        throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
    }
// return await product.save()
             // let result= await product.save()
    // return result.toObject()
    return formatMongoData(product);
}
catch(error){
    console.log('something went wrong',error)
    throw new Error(error)
}
}


//update the product
module.exports.updateProduct=async({id,updateInfo})=>{
    ///same key value pairs
    // let product=new Product({
    //     name:serviceData.name,
    // })
    try{
        checkObjectId(id)
        let product =await Product.findByIdAndUpdate({_id:id},updateInfo,{new:true})
        if(!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
        }
    // return await product.save()
                 // let result= await product.save()
        // return result.toObject()
        return formatMongoData(product);
    }
    catch(error){
        console.log('something went wrong',error)
        throw new Error(error)
    }
    }
    
    
//deleteProduct
    module.exports.deleteProduct=async({id})=>{
        ///same key value pairs
        // let product=new Product({
        //     name:serviceData.name,
        // })
        try{
            checkObjectId(id)
            let product =await Product.findByIdAndDelete(id)
            if(!product){
                throw new Error(constants.productMessage.PRODUCT_NOT_FOUND)
            }
        // return await product.save()
                     // let result= await product.save()
            // return result.toObject()
            return formatMongoData(product);
        }
        catch(error){
            console.log('something went wrong',error)
            throw new Error(error)
        }
        }