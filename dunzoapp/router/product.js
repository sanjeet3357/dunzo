const express=require('express');
const router=express.Router();
const multer=require('multer');
const productModel=require('../model/Schema/productSchema')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/product/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpeg' || file.mimetype==='image/png' || file.mimetype==='image/jpg'){
    cb(null,true);
    }
    else{
        cb(null,false);
    }
      }

const upload=multer({
    storage:storage,
    limits:1024 *1024,   //2mb
    fileFilter:fileFilter
})

router.post('/addProduct',upload.single('image'),async(req,res)=>{
try{
    const storeId=req.body.storeId;
    const productName=req.body.productName;
    const quantity=req.body.quantity;
    const price=req.body.price;
    const image=req.file.path;
    if(!productName || !price || !quantity){
res.status(200).json({message:"All fields are required"});
    }
    const product=new productModel({
        storeId:storeId,
        productName:productName,
        price:price,
        quantity:quantity,
        image:image
    })
    const productData=await product.save();
    res.status(201).json({message:"Product added Successfully",data:productData})

}catch(err){
    console.log(err)
    res.status(400).json({message:"Some Error Occured"})
}  
})

router.get('/product/:storeId',async (req,res)=>{
  const storeId=req.params.storeId;
  const product=await productModel.find({});
  res.status(200).json({data:product})
})

module.exports=router;