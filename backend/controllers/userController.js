 const User=require('../models/userModel')
 
 //login user

 const loginUser=async(req,res)=>{
    res.json({msg:'login user'})
 }

 const signupUser=async(req,res)=>{
   const {email,password}=req.body

   try{
      const user=await User.signup(email,password)
      res.status(200).json({email,user})
   }catch(error){
      console.log("Cannot sign up user:", error)
      res.status(400).json({error:"Something went wrong when signing up, please try again later."})
   }
 }

 module.exports={signupUser,loginUser}
