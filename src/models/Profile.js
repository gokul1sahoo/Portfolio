const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  role: String,
  company: String,
  period: String,
  details: String
});

const profileSchema = new mongoose.Schema({
  name: String,
  role: String,
  tagline: String,
  photo: String,
  about: String,
  skills: [String],
  myStack: [String],
  experience: [experienceSchema],
  education: [String],
  contact: {
    email: String,
    phone: String,
    location: String,
    socials: {
      facebook: String,
      instagram: String,
      linkedin: String,
      github: String,
      gmail: String
    }
  }
});

module.exports = mongoose.model("Profile", profileSchema);
