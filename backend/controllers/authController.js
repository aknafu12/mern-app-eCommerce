const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

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
    res.status(201).json({
        sucess: true,
        message:"New account created",
        user
    })

})