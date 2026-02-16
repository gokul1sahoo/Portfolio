const mongoose = require("mongoose");
const Profile = require("./src/models/Profile");
require("dotenv").config();

const checkDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const profile = await Profile.findOne();
    console.log("Facebook URL:", profile.contact.socials.facebook);
    console.log("Instagram URL:", profile.contact.socials.instagram);
    console.log("LinkedIn URL:", profile.contact.socials.linkedin);
    console.log("GitHub URL:", profile.contact.socials.github);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

checkDb();
