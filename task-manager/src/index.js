const port = process.env.PORT || 8080



require('./db/mongoose');

const express = require('express');
const app = express();

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(port,() => {
    console.log(`server running at ${port}...`)
})

const Task = require('./models/task')
const User = require('./models/user')


//const main = async () => {


//     const task = await Task.findById('5ccae16b6899241518af6eee')
// await task.populate('owner').execPopulate()
//     console.log(task.owner) 


// const user = await User.findById('5ccae1406899241518af6eec')
//  await user.populate('tasks').execPopulate()

//     console.log(user.tasks) 
//}


//main()