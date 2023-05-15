const register = require('express').Router()
const { User, validate} = require('../models/users')
const bcrypt = require('bcrypt') //to hash the passwords

// register = express()

register.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const { error } = validate(req.body)//destructuring the returned error from validation function incase data is invalid
        if (error) {
            return res.status(400).send({ message: error.details[0].message }) //400 for invalid request
        }

        //to check if user is already existing with given email
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            return res.status(409).send({ message: "User already exists" })
            //409 indicates conflict in the request, in our case user already exists
        }

        //hashing the password
        //salt is the random string to hash the password with the length of 10
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //saving the user to the database
        await new User({ ...req.body, password: hashedPassword }).save()

        res.status(201).send({ message: "User registered successfully" })//201 indicates successful creation

    } catch (error) {
        console.log(error)
        res.send({ message: "internal server error " }).status(500)//500 indicates server side error
    }
})

module.exports = register