const dashboard=require('express').Router()
const mongoose=require('mongoose')
const {User}=require('../models/users')

dashboard.get('/:id',async (req,res)=>{
    try {
        // console.log(req.params.id)
        const user=await User.findById(req.params.id).select("-password")
        if(!user){
            return res.status(404).send({message:"User not found"})
        }
        res.status(200).send({data:user,message:"User found"})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Internal server error"})
    }
})

module.exports=dashboard