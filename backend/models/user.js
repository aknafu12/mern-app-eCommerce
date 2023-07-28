const mongoose = require('mongoose');
const validator = require('validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength:[30, 'Your name cannot exceed 30 characher']

    },
    email:{
        type:String,
        require:true,
        validate:[validator.isEmail, 'Please enter valide email'],
        unique : true, //email should be unqiue in

    },
    password:{
        type:String,
        require:[true, 'Pleae enter password'],
        minlength:[6, 'Your password must be longer tha 6 characheter'],
        select : false, 

    },
    avatar:{
        public_id:{
            type:String,
            default:'default',
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    role:{
        type:String,
        default:'user'
        // enum:[1,2],//admin or normal users
        // default:2,//normal by defult
        // required:true

    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
resetPasswordToken: String,
resetPasswordExpire: Date

    })

// encrpting password before saving user  or saved encrpted password  
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);

})

// return Json web token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

module.exports = mongoose.model('user', userSchema);