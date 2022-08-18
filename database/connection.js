const mongoose=require('mongoose')

module.exports=async()=>{
    try{
    await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
    console.log('database is connected successfully')
    }
    catch(err){
        console.log(err,'error in data')
    }
}