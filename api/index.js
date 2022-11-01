const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

mongoose.connect('mongodb://localhost:27017/blogwebsite')
.then(console.log('connected successfuly'))
.catch((err)=>{
    console.log(err)
});
const app=express();
app.use('/',(req,res)=>{
    console.log('hi this is Main Page')
})
app.listen('5000',()=>{
    console.log('backend listen on port 5000')
})