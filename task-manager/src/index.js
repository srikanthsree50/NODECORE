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