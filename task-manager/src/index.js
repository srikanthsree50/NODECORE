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



const bcrypt = require('bcryptjs');

const myfun = async () => {


    const password = 'red123!';
    const hashPass = await bcrypt.hash(password, 8);
    console.log(password);
    console.log(hashPass);

    const isMatch = await bcrypt.compare(password,hashPass);
    console.log(isMatch)
}
myfun()
    