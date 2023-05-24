const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    // err.message = err.message || "Internal server error";
    //DEVELOPMENT error
    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        //wrong mongoose object ID error
       
        res.status(err.statusCode).json({
            success:false,
            //error: err,
            errMessage:err.message,
            //stack: err.stack
        });
                //wrong mongoose object ID error
        if(err.name === 'CastError' && err.kind === 'ObjectId'){
            err.message = 'Wrong id';
            err = new ErrorHandler(err.message, 404)

            
        }

        //handling mongoose validation errors
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            err.message = message;
            err = new ErrorHandler(err.message, 400);
            }
            //handling mongoose duplicate key error
            if(err.name === 'MongoError' && err.code === 11000){
                err.message = 'Duplicate Key';
                err = new ErrorHandler(err.message, 400);
                }

    }

    //PRODUCTION error 
    if(process.env.NODE_ENV === 'PRODUCTION'){
        let error ={...err}  //copy above error
        error.message = err.message;
        //wrong mongoose object ID error
        if(err.name === 'CastError' && err.kind === 'ObjectId'){
            error.message = 'Wrong id';
            error = new ErrorHandler(error.message, 404)

        }

        res.status(error.statusCode).json({
            success:false,
            message:error.message || 'Internal Server Error',
        });
    }
}