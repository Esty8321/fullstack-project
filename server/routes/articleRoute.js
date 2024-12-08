const express=require('express')
const router=express.Router()
const Article=require('../models/Article')//the schema which want



router.post('/',async(req,res)=>{//post use to create new item
   const {name}=req.body
   if(!name)
      return res.status(400).send('you need to insert title in your object')
    const article=await Article.create({name:name})
    res.json(article)
})

module.exports=router