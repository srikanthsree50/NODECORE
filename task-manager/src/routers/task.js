const express = require('express');
const Task = require('../models/task');

const router = new express.Router();




router.get('/tasks', async (req,res) => {

    try {
        const tasks = await Task.find({})
        res.status(201).send(tasks)
            }
            catch(e){
        res.status(400).send(e);
            }

    // Task.find({}).then((data)=>{
    //     res.status(200).send(data)
    // }).catch((err)=>{
    //     res.status(400).send(err)
    // })

})

router.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id;


    try {

        const task = await Task.findById(_id);
        if(!task){
            return res.status(404).send()
        }
        res.status(201).send(task)
        }
        catch(e){
        res.status(404).send(e)
        }

    // Task.findById(_id).then((data)=>{
    //     res.status(200).send(data)
    // }).catch((err)=>{
    //     res.status(400).send(err)
    // })

})

router.patch('/tasks/:id', async (req,res) => {

    try {
    
    const task = await Task.findByIdAndUpdate(req.params.id,req.body, { new : true, runValidators:true});
    if(!task){
        return res.status(404).send()
    }
    res.status(201).send(task)
    }
    catch(e){
    res.status(404).send(e)
    }
    
        // Task.findByIdAndUpdate(_id).then((task)=>{
        //     res.status(200).send(task)
        // }).catch((err)=>{
        //     res.status(400).send(err)
        // })
    
    })
    
    router.delete('/tasks/:id', async (req,res) => {

        try {
        
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).send()
        }
        res.status(201).send(task)
        }
        catch(e){
        res.status(404).send(e)
        }
    })   



 
    router.post('/tasks', async (req,res) => {

    const task = new Task(req.body);

    try
    {
   
   await task.save()
   res.status(200).send(task)
   }
   catch(e) {
   res.status(400).send(e)
   }

    // task.save().then((data) => {
    //     res.status(200).send(data)
    // }).catch((err) => {
    //     res.status(400).send(err)
    // })

 })
 



module.exports = router;