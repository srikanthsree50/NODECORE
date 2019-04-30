const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema( {
    name: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        unique:true,
type:String,
trim:true,
lowercase:true,
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
});

userSchema.statics.findByCredentials = async (email,password) => {

const user = await User.findOne({email});

if(!user){
    throw new Error('unable to Login..');
}

const isMatch = await bcrypt.compare(password,user.password);

if(!isMatch){
    throw new Error('unable to Login..');
}
return user
}

userSchema.pre('save', async function (next) {

const user = this

if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8);
}

next()
});

const User = mongoose.model('User',userSchema)


module.exports = User