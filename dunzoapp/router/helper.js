const express=require('express');
const router=express.Router();
const helperModel=require('../model/Schema/helperSchema');

router.post('/helper',async(req,res)=>{
    try{
        const {services,description,location}=req.body
        if(!services || !description || !location){
            return res.status(400).json({message:"All fields are required",success:false})
        }
        const helper=new helperModel({
            services,description,location
        })
        const data=await helper.save();
        res.status(201).json({message:"Request for helper sent",data:data})
    }catch(err){
         res.status(400).json({message:"Something went Wrong",success:false,err:err.message})
    }
})

router.get('/helper',async(req,res)=>{
try{
    const helper=await helperModel.find();
    res.status(200).json({data:helper,sucsess:true});
}
catch(err){
    res.status(400).json({message:"Something went wrong",err:err.message})
}
})
module.exports=router;