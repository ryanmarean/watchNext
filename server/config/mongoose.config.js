const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/watchnext_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
})
  .then(() => console.log("Connected to db"))
  .catch(err => console.log("Error connecting to db: ", err));