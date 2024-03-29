const catchAsyncErrors = require('./catchAsyncErrors');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');


// check if user is authenticated or Notification

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    // console.log(token);
    if(!token){
        return next(new  ErrorHandler('Login first to access this resource.', 401))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

req.user = await User.findById(decoded.id);

next()

}) 


// handle users roles

exports.authorizeRoles = (...roles) => {
    return(req, res, next) => {
        if(!roles.includes(req.user.role)) {
            // ${req.user.role}
            return next( new ErrorHandler(  'Role  is not allowed to access this resource', 403))
        }
        next()
    }
}

