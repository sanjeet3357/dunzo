const mongoose=require('../connection');
const Schema=mongoose.Schema;
const productSchema=new Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})

const productModel=mongoose.model('product',productSchema)
module.exports=productModel