const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  summary: String,
  stack: [String],
  links: {
    live: String,
    repo: String
  },
  image: String,
  order: Number
});

module.exports = mongoose.model("Project", projectSchema);
