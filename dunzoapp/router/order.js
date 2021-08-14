const express=require('express');
const router=express.Router();
const orderModel=require('../model/Schema/orderSchema');

router.post('/order',async(req,res)=>{
    try{
    const storeId=req.body.storeId;
    const items=req.body.items;
    const couponCode=req.body.couponCode;
    const orderType=req.body.orderType;
    const address=req.body.address;

    const order=new orderModel({
        storeId,items:items,couponCode,orderType,address
    })
    const data=await order.save();
    res.status(201).json({message:"Order created Successfully",success:true,data:data})
    }catch(err){
     res.status(400).json({message:"Something went wrong",success:false,err:err.message})
    }
    

})
module.exports=router;
