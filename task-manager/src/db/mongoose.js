const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex:true
})

// const Task = mongoose.model('Task',{
// description:{
//     type:String,
//trim:true,
//required:true
// },
// completed:{
//     type:Boolean,
//   default:false
// }
// })

// const tasks = new Task({
//     description:'how r u',
//     completed:true
// })

// tasks.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

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

const me = new User({
    name:'AsrikanthG',
    email:'s@s.com',
    age:31
});

me.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})