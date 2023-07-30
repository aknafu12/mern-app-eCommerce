const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const sendToken = require('../utils/jwtToken');

// register a user => /api/register
exports.registerUser = catchAsyncErrors(async (req, res, next)=> {
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:'ecommerce/avatar/user',
            url:'https://console.cloudinary.com/console/c-07d8e6886b5a7488233bfee86e2c24/media-explorer/ecommerce/avatar?assetId=c159ad3474bc3a94f13a95b26a2485bc'
        }

    })

    const token = user.getJwtToken();



    res.status(201).json({
        sucess: true,
        message:"Successful new account created",        
        token // user
        
    })

})

// login user => /api/login
exports.loginUser = catchAsyncErrors( async(req, res, next) => {
    const {email, password} = req.body;

    // check if emal and password is entered by user
    if(!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400))
    }

    // finding user in database
    const user = await User.findOne({email}).select('+password')

    if(!user){
        return next(new ErrorHandler("Invalid  email or password", 401))
 
    }
    // check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid  email or password", 401))


    }

    // // const token = user.getJwtToken();

    // // res.status(200).json({
    // //     sucess: true,
    // //     token
    // })

    sendToken(user, 200, res);
    

})

// logout user = api/logout
exports.logout = catchAsyncErrors(async (req, res, next)=> {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
  res.status(200).json({
    sucess:true,
    message:'Logged out'
  })
})









