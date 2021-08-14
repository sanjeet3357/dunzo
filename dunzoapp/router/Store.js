const express=require('express');
const router=express.Router();
const storeModel=require('../model/Schema/StoreSchema')
router.post('/addStore',async(req,res)=>{
    try{
        const {categoryId,storeName,address,phone}=req.body;
        if(!storeName || !address || !phone){
            return res.status(422).json({message:"All field are required",success:false})
        }
        const store=new storeModel({
            categoryId,
            storeName,
            address,
            phone
        })
        const storeData=await store.save();
        res.status(201).json({message:'Store created Successfully',success:true,store:storeData});
    }catch(err){
        console.log(`error occured ${err}`)
        res.status(400).json({message:"Something went wrong",error:err})
    }
})


router.get('/store/:categoryId',async(req,res)=>{
    try{
        const categoryId=req.params.categoryId;
        const store=await storeModel.find({categoryId:categoryId},null,{sort:{'createdAt':-1}})
        res.status(200).json({data:store})
    }catch(err){
        console.log(err);
        res.status(200).json({message:"Some error Occured"})
    }
  
})

module.exports=router;