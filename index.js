const express=require("express");
const jobRouter=require('./routes/jobRoutes');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Jobs_Db')
.then(()=>{console.log("db connected succesfully");})
.catch((e)=>{console.log('Error while connecting db',e);})
const app=express();
app.use(express.json());
app.use(jobRouter)

app.listen(10000,()=>{console.log("Server is running at port 10000");})