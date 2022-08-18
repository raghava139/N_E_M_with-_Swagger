module.exports={
    defaultServerResponse:{
    status:400,
    message:"",
    body:{}
    },
    productMessage:{
        PRODUCT_CREATED:'PRODUCT CREATED SUCCESSFULLY',
        PRODUCT_FETCHED:'PRODUCT FETCHED SUCCESSFULLY',
        PRODUCT_UPDATED:'PRODUCT UPDATED SUCCESSFULLY',
        PRODUCT_DELETED:'PRODUCT DELETED SUCCESSFULLY',
        PRODUCT_NOT_FOUND:'PRODUCT NOT FOUND',
    },
    userMessage:{
        //SIGNUP
        SIGNUP_SUCCESS:'SIGN UP SUCCESSFULLY',
        DUPLICATE_EMAIL:'USER ALREADY EXISTS WITH GIVEN EMAIL',
        //EMAIL
        USER_NOT_FOUND:'USER NOT FOUND',
        LOGIN_SUCCESS:'LOGIN SUCCESSFULLY',
        INVALID_PASSWORD:'INCORRECT PASSWORD'

    },
    databaseMessage:{
        INVALID_ID:"Invalid Id"
    },
    requestValidationMessage:{
        BAD_REQUEST:"Invalid Fields",
        TOKEN_MISSING:"Token missing from header"
    }
}