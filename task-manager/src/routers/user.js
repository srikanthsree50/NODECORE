const auth = require('..//moddleware/auth')
const express = require('express');
const User = require('../models/user');

const router = new express.Router();


router.get('/users/me', auth , async (req,res) => {
 
    res.send(req.user);
})


router.post('/users', async (req,res) => {
     
    const user =  new User(req.body);
  
  try
   {
  
  await user.save()

  const token = await user.generateAuthToken()

  res.status(200).send({user,token})
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
  
  router.post('/users/login', async (req,res) => {
try{

const user = await User.findByCredentials(req.body.email,req.body.password)
const token = await user.generateAuthToken()
res.send({user,token})
}
catch(e){
res.status(400).send()
}
  })

router.post('/users/logout', auth, async (req,res) => {
    try{

req.user.tokens = req.user.tokens.filter((token) => {
    return token.token !== req.token
})
await req.user.save()
res.send()
    }

    catch(e){
res.status(500).send()
    }
})

router.post('/users/logoutAll' , auth , async (req,res) => {
    try{
req.user.tokens = []
await req.user.save()
res.send()
    }
    catch(e){
res.status(500).send()
    }
})

  router.patch('/users/me', auth , async (req,res) => {

const updates = Object.keys(req.body);
const allowedUpdates = ['name','email','password','age'];
const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

if(!isValidOperation){
    return res.status(400).send({error:'invalid updates'})
}

try {


    updates.forEach((update) => req.user[update] = req.body[update])

await req.user.save()

  // const user = await User.findByIdAndUpdate(req.params.id,req.body, { new : true, runValidators:true});

res.send(req.user)
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

router.delete('/users/me', auth , async (req,res) => {

    try {
    
    await req.user.remove()
    res.send(req.user)
    }
    catch(e){
    res.status(500).send(e)
    }
})    



module.exports = router;