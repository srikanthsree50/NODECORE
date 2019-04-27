const express = require('express');
const User = require('../models/user');

const router = new express.Router();


router.get('/users',async (req,res) => {

    try {
const users = await User.find({})
res.status(201).send(users)
    }
    catch(e){
res.status(400).send(e);
    }


    // User.find({}).then((data)=>{
    //     res.status(200).send(data)
    // }).catch((err)=>{
    //     res.status(400).send(err)
    // })

})

router.get('/users/:id', async (req,res) => {
    const _id = req.params.id;

try {

const user = await User.findById(_id);
if(!user){
    return res.status(404).send()
}
res.status(201).send(user)
}
catch(e){
res.status(404).send(e)
}

    // User.findById(_id).then((data)=>{
    //     res.status(200).send(data)
    // }).catch((err)=>{
    //     res.status(400).send(err)
    // })

})

router.post('/users', async (req,res) => {
     
    const user =  new User(req.body);
  
  try
   {
  
  await user.save()
  res.status(200).send(user)
  }
  catch(e) {
  res.status(400).send(e)
  }
  
  //    user.save().then((data) => {
  //        res.status(200).send(data)
  //    }).catch((err) => {
  //        res.status(400).send(err)
  //    })
  
  })
  

  router.patch('/users/:id', async (req,res) => {

try {

const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true, runValidators:true});
if(!user){
    return res.status(404).send()
}
res.status(201).send(user)
}
catch(e){
res.status(404).send(e)
}

    // User.findById(_id).then((data)=>{
    //     res.status(200).send(data)
    // }).catch((err)=>{
    //     res.status(400).send(err)
    // })

})

router.delete('/users/:id', async (req,res) => {

    try {
    
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(404).send()
    }
    res.status(201).send(user)
    }
    catch(e){
    res.status(404).send(e)
    }
})    



module.exports = router;