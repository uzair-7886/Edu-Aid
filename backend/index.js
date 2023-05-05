const express = require('express')
const path = require('path')
// const mongoose = require('mongoose')
const cors =require('cors')
const connection=require('./db') //import connection function  from configured database from db.js

//configuring express server
const app = express()
const port = 3001

connection();

//middlewares
app.use(cors()) //to resolve cross-origin resource sharing because client server is requesting from port 3000 and backend server is running on port 3001
app.use(express.json()) //without it the server would receive json data as a string, it is used to parse it as a js object
 
 
//defined the schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String
// });

// const User = mongoose.model('User', userSchema)

// const users = [
//     { name: 'Alice', email: 'alice@example.com' },
//     { name: 'Bob', email: 'bob@example.com' },
//     { name: 'Charlie', email: 'charlie@example.com' }
// ];

// User.create(users)
//     .then(() => console.log('Dummy data inserted successfully'))
//     .catch((err) => console.log('Error inserting dummy data', err));   
//to insert data we can also use <result>= await User.save() (it is also a promise that's why used await) 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
