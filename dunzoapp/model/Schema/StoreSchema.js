const mongoose=require('../connection');
const Schema=mongoose.Schema;
const StoreSchema=new Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
            },
    storeName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},{timestamps:true});
const storeModel=mongoose.model('store',StoreSchema);
module.exports=storeModel;