const express = require('express')
const router=express.Router()

//get login
router.get('/',(req,res)=>{
  res.send('Get logged in user')
})
//login
router.post('/',(req,res)=>{
  res.send('Log in user')
})
module.exports=router