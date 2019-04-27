require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

// User.findByIdAndUpdate('5cc1816f23b0f91694f1388f', {age:11}).then((user) =>{
//     console.log(user)
//     return User.countDocuments({age:11})
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// const UpdateAgeandCount = async (id,age) => {

// const user = await User.findByIdAndUpdate(id,{age});

// const count = await UscountDocuments({age});

// return count;

// }

// UpdateAgeandCount('5cc1816f23b0f91694f1388f',21).then((user) => {
// console.log(user);
// }).catch((e) => {
// console.log(e);
// })


Task.findByIdAndRemove('5cc19451c1083312e44d3293').then((task) =>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

const RemovetTask = async (id) => {
    const task = await Task.findByIdAndRemove(id);
    const count = await Task.countDocuments({completed:false});
    return count;
}

RemovetTask('5cc315f41de4121b0c0d52e8').then((count) => {
     console.log(count);
    }).catch((e) => {
    console.log(e);
    })