const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser')
require('dotenv/config')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/',require('./router/auth'));
app.use('/',require('./router/index'));
app.use('/',require('./router/Store'));
app.use('/',require('./router/category'));
app.use('/',require('./router/product'));
app.use('/',require('./router/mobileOtp'));
app.use('/',require('./router/order'));
app.use('/',require('./router/helper'));
app.listen(process.env.PORT || 3000,(err)=>{
if(err){
    console.log(`Error in creating connection ${err}`)
}
else{
    console.log("Server is running on port 3000");
}
})