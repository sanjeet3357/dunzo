const express=require('express')
const router=express.Router();
const authenticate=require('../middleware/auhenticate')

router.get('/',authenticate,(req,res)=>{
res.send(`welcome ${req.rootUser.name}`)
})
module.exports=router;