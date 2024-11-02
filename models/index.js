const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/chat')
  .then(() => console.log('Connection to MongoDB is established'))
  .catch(err => console.log(err));
