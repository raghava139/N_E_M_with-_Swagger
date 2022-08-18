const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
},{
    timestamps:true,
    toObject:{
        transform:function(doc,ret,options){
            // console.log(ret)
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
})
module.exports=mongoose.model('MyProduct',productSchema)