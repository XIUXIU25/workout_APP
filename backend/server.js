require("dotenv").config();

const express=require("express");
const mongoose=require('mongoose');
const workoutRoutes=require('./routes/workouts');
const userRoutes=require('./routes/user');

const app=express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
});

app.use("/api/workouts",workoutRoutes)
app.use("/api/user",userRoutes)

mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("listening on port",process.env.PORT)
        });
    })
    .catch((error)=>{
        console.log(error)
    });

console.log('MONG_URI:', process.env.MONG_URI);


