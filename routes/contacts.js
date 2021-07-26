const express = require('express')
const router=express.Router()

// get all contact
router.get('/',(req,res)=>{
  res.send('Get all contacts')
})

//add new contact
router.post('/',(req,res)=>{
  res.send('Add new contact')
})

//update contact
router.put('/:id',(req,res)=>{
  res.send('Update contact')
})
//delete
router.delete('/:id',(req,res)=>{
  res.send('Delete contact')
})
module.exports=router