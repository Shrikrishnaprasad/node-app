const express = require('express')
const router=express.Router()

//register
router.post('/',(req,res)=>{
  res.send('Register a user')
})
module.exports=router