const express=require('express');
const router=express.Router();
const client=require('twilio')(process.env.accountSID,process.env.authToken);

router.post('/generateOTP',(req,res)=>{
    try{
        const phone=req.body.phone
        if(!phone){
            return res.status(400).json({message:"Phone Number is required",success:false})
        }
        client.verify
            .services(process.env.serviceID)
            .verifications
            .create({
                to:`+91${phone}`,
                channel:'sms'
            })
            .then((data)=>{
                res.status(200).json({message:"Otp Send Successfully",data:data})
            })
            
    }catch(err){
        console.log(err)
        res.status(401).json({message:"Please Enter a Valid Phone Number with + and Country code",success:'false',error:err.message})
    } 
})

router.post('/verify',(req,res)=>{
    try{
        const phone=req.body.phone
        const code=req.body.code
        if(!code){
            return res.status.json({message:"Please enter code"})
        }
        client.verify
            .services(process.env.serviceID)
            .verificationChecks
            .create({
                to:`+91${phone}`,
                code:code
            })
            .then((data)=>{
                if(data.valid==true){
                    res.status(200).json({message:"Otp verified successfully",data:data})
                }
                throw new Error("provided code is not valid")
            }).catch((error)=>{
                res.status(401).json({message:"Invalid Otp",error:error})
            })
    }catch(err){
res.status().json({message:'could not verify Phone',error:err.message})
    }

})

module.exports=router;