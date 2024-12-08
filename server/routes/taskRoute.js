
const express=require('express')
const router=express.Router()
const Task=require('../models/Task')//the schema which want



router.post('/',async(req,res)=>{//post use to create new item
console.log(req.body)
   const {title}=req.body
   if(!title)
      return res.status(400).send('you need to insert title in your object')
    const task=await Task.create({title:title})
    res.json(task)
})

module.exports=router