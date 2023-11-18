const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://warnerimran786:warnerimran786@cluster0.ymuyl8w.mongodb.net/?retryWrites=true&w=majority';

async function ConnectToMongoose() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
ConnectToMongoose();
module.exports = ConnectToMongoose