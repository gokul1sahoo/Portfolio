const mongoose = require("mongoose");
const Profile = require("../models/Profile");
const Project = require("../models/Project");
const { profile, projects } = require("../data/siteData");

require("dotenv").config();

const seed = async () => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI not set. Cannot seed.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Profile.deleteMany({});
    await Project.deleteMany({});

    await Profile.create(profile);
    await Project.insertMany(projects);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed");
    console.error(error.message);
    process.exit(1);
  }
};

seed();
