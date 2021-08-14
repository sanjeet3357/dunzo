const mongoose=require('../connection');
const Schema=mongoose.Schema;
const orderSchema=new Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'store',
        required:true
    },
    items:[
        {
        item:{
        type:Object,
        required:true
    },
    totalprice:{
        type:Number
    },
    totalqty:{
        type:Number
    }
}
],
    couponCode:{
        type:String,
        default:null
    },
    orderType:{
        type:String,
        default:'Delivery'
    },
    address:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        default:'COD'
    },
      paymentStatus:{
        type:Boolean,
        default:false
    },
    status:{
    type:String,
    default:'order_placed'
    }
},{timestamps:true})

const orderModel=mongoose.model('order',orderSchema);
module.exports=orderModel;
