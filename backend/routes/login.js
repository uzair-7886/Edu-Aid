const login = require('express').Router()
const { User } = require('../models/users')
const joi=require('joi')
const bcrypt=require('bcrypt')

login.post("/",async (req,res)=>{
    try {
        // console.log("here")
        const {error}=validate(req.body)
        if(error){
            return res.status(400).send({message:error.details[0].message})
        }
        const user= await User.findOne({email:req.body.email})
        if(!user){
            return res.status(401).send({message:"User does not exist with given email"})
        }

        const validPassword=await bcrypt.compare(req.body.password,user.password)

        if(!validPassword){
            return res.status(401).send({message:"Invalid Password"})
        }

        //if user is authenticated with correct email and password we return token
        // console.log(user)
        const token=user.authToken()
        // console.log(token)
        res.status(200).send({data:token,message:"Login successfully"})
        // res.status(200).send(token)


    } catch (error) {
        console.log(error)
        res.status(500).send({message:"internal server error"})
    }
})

const validate=(data)=>{
    //joi.object method is used to validate an object
    // console.log("called validate")
   const schema=joi.object({
    email:joi.string().email().required().label("Email"),
    password:joi.string().required().label("Password")
   })
   return schema.validate(data)
}

module.exports=login