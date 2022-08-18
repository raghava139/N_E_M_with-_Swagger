const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    email:String,
    password:String
},{
    timestamps:true,
    toObject:{
        transform:function(doc,ret,options){
            // console.log(ret)
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;
            //user password delete
            delete ret.password;
            return ret;
        }
    }
})
module.exports=mongoose.model('User',userSchema)