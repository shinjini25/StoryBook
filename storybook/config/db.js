const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env " })

const connectDB = async () => {


    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connection successful ${conn.connection.host}`);

    }
    catch (e) {
        console.log('Connection to MongoDB unsucessful.');
        process.exit(1);
    }
};

module.exports = connectDB;