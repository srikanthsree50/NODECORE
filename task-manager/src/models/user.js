const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type:String,
        required:true,
        trim:true
    },
    email:{
type:String,
trim:true,
required:true,
 validate(value){
     if(!validator.isEmail(value)){
throw new Error('email is invalid....');
     }
 }
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
if(value.toLowerCase().includes('password')){
    throw new Error('password should not be "password"...')
}
        }
    },
    age:{
        type:Number,
        default:31,
        validate(value){
            if(value < 0){
                throw new Error('age must be positive number...')
            }
        }
    }
})


module.exports = User