const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
  },
  desc: {
    type: String,
  },
  genrePreference: {
    type: [String],
  },
  members: {
    type: [String],
  },
  matchedMovies: {
    type: [String],
  },
});

module.exports.Group = mongoose.model("Group", GroupSchema);