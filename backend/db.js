const mongoose = require('mongoose')


//follwoing is the connection string to connect to mongodb atlas, defualt password set is "test123"
const connection_string = "mongodb+srv://test:test123@cluster0.crkepeb.mongodb.net/?retryWrites=true&w=majority"

const connection = () => {
    //mongoose.connect returns a promise
    mongoose.connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch((err) => console.log('Error connecting to MongoDB Atlas', err));
}

module.exports = connection