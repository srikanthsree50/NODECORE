const express = require('express');
const Task = require('../models/task');
const auth = require('../moddleware/auth')
const router = new express.Router();




router.get('/tasks', auth, async (req,res) => {

    try {

        await req.user.populate('tasks').execPopulate()

        res.send(req.user.tasks)
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

router.patch('/tasks/:id',auth, async (req,res) => {


    const updates = Object.keys(req.body);
    const allowedUpdates = ['description','completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if(!isValidOperation){
        return res.status(400).send({error:'invalid updates'})
    }

    try {
    const task = await Task.findOne({_id:req.params.id, owner:req.user._id})
   
   if(!task){
        return res.status(404).send()
    }
    
    updates.forEach((update) => task[update] = req.body[update])
    await task.save()

    res.send(task)
    }
    catch(e){
    res.status(404).send(e)
    }
    
    })

    

    router.delete('/tasks/:id', auth, async (req,res) => {

        try {
        
        const task = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id});

        if(!task){
            return res.status(404).send()
        }
        res.status(201).send(task)
        }
        catch(e){
        res.status(404).send(e)
        }
    })   



 
    router.post('/tasks', auth , async (req,res) => {

const task = new Task({
    ...req.body,
    owner: req.user._id
})
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