const express=require('express')
const router=express.Router();
const productController=require('../controller/productController')
const joiSchemaValidation=require('../middleware/joiSchemaValidation')
const productSchema=require('../apiSchema/productSchema')
const tokenValidate=require('../middleware/tokenValidation')
// router.post('/',(req,res)=>{
//     res.send('post api is created successfully')
// })
router.post('/',tokenValidate.validateToken,joiSchemaValidation.validateBody(productSchema.createProductSchema),productController.createProduct)

//get all products
router.get('/',tokenValidate.validateToken,joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),productController.getAllProducts)

//get product by single Id
router.get('/:id',productController.getProductById)

//update the product
router.put('/:id',tokenValidate.validateToken,joiSchemaValidation.validateBody(productSchema.updateProductSchema),productController.updateProduct)

//delete the product
router.delete('/:id',tokenValidate.validateToken,productController.deleteProduct)
module.exports=router;