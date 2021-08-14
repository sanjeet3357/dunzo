const mongoose=require('../connection');
const Schema=mongoose.Schema;
const helperSchema=new Schema({
    // storeId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'store'
    // },
    services:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
},{timeStamps:true})

const helperModel=mongoose.model('helper',helperSchema);
module.exports=helperModel;