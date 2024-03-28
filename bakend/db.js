const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://shoaibvehni:mNtqyQFc7rIxeDSq@cluster0.ghkdb1j.mongodb.net/Inotebook"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToMongo;
