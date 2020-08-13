const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MONGODB CONNECTED :)');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
