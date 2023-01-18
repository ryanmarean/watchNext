const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
  IMDbId: {
    type: String,
  },
  title: {
    type: String,
  },
  overview: {
    type: String,
  },
  genre: {
    type: String,
  },
  imgSrc: {
    type: String,
  },
  url: {
    type: String,
  },
})

module.exports.Film = mongoose.model("Film", FilmSchema);