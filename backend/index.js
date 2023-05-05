const express = require('express')
const path = require('path')
const mongoose = require('mongoose')


const app = express()
const port = 3001

//this is the connection string to connect to mongodb atlas, defualt password set is "test123"

const connection_string = "mongodb+srv://test:test123@cluster0.crkepeb.mongodb.net/?retryWrites=true&w=majority"

//mongoose.connect returns a promise
mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.log('Error connecting to MongoDB Atlas', err));
    
 
//defined the schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema)

const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
];

User.create(users)
    .then(() => console.log('Dummy data inserted successfully'))
    .catch((err) => console.log('Error inserting dummy data', err));
    
//to insert data we can also use <result>= await User.save() (it is also a promise that's why used await) 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
