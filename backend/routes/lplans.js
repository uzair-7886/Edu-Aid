const lplans = require('express').Router()
const { User } = require('../models/users')


lplans.post("/:id",async (req,res)=>{
    try {
        const userId=req.params.id
        console.log(req.body)
        await User.updateOne({_id:userId},{adhd:req.body.adhd_boolean,dyslexia:req.body.dyslexia_boolean,vis_agn:req.body.visual_agnosia_boolean})
        // console.log("user data updated")
    } catch (error) {
        console.log(error)
    }

})

module.exports=lplans