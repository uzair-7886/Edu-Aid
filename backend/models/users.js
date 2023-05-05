const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Joi=require('joi') //joi is a nodejs package to validate the form data and to specify schema as the expected datatypes.return an error if the data does not match the expected structure or violates any of the validation rules.
const passwordComplexity=require("joi-password-complexity") //defines password cpmplexity

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
}
)

//following is the method authToken defined on userSchema which returns json web token for the specified user with the payload of id this token would be used to authenticate further requests
userSchema.methods.authToken=function(){
    const token=jwt.sign({_id:this._id},'blahblahblahkey') //blahblahblahkey is the private key to sign the document for authentication purpose
    return token
}

const validation=(data)=>{
    const schema={
        firstName:Joi.string().required().label("First Name"),
        lastName:Joi.string().required().label("Last Name"),
        email:Joi.string().required().email().label("Email"),
        password:new passwordComplexity().required().label("Password")
    }
    return schema.validate(data)
}

const User=mongoose.model('User',userSchema) //defined the model

module.exports={User,validation} //exported the model and validation function