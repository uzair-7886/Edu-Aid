const login = require('express').Router()
const { User } = require('../models/users')
const joi=require('joi')
const bcrypt=require('bcrypt')

login.post("/",async (req,res)=>{
    try {
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
        const token=User.authToken()

        res.send({data:token,message:"Login successfully"}).status(200)


    } catch (error) {
        res.status(500).send({message:"internal server error"})
    }
})

const validate=(data)=>{
    //joi.object method is used to validate an object
   const schema=joi.object({
    email:joi.string().email().required().label("Email"),
    password:joi.string().required().label("Password")
   })
   return schema.validate(data)
}

module.exports=login