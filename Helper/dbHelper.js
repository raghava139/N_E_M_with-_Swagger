const mongoose=require('mongoose');
const constants = require('../constants');

// it is for toobject all objects 
module.exports.formatMongoData=(data)=>{
    if(Array.isArray(data))
    {
        // console.log(Array)
        // console.log(isArray)
        // console.log(data)
        let newDataList=[];
        for(value of data)
        {
            // console.log(value)
            // console.log(data)
            newDataList.push(value.toObject());
        }
        return newDataList;
    }
    return data.toObject()
}

module.exports.checkObjectId=(id)=>{
    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new Error(constants.databaseMessage.INVALID_ID)
    }
}