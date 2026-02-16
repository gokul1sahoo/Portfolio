const { isDbReady } = require("../db");
const Profile = require("../models/Profile");
const Project = require("../models/Project");
const fallbackData = require("../data/siteData");

const home = async (req, res) => {
  let profile = fallbackData.profile;
  let projects = fallbackData.projects;

  if (isDbReady()) {
    try {
      const dbProfile = await Profile.findOne().lean();
      const dbProjects = await Project.find().sort({ order: 1 }).lean();

      if (dbProfile) {
        profile = dbProfile;
      }
      if (dbProjects.length) {
        projects = dbProjects;
      }
    } catch (error) {
      console.error("Database query failed. Using fallback data.");
    }
  }

  if (!Array.isArray(profile.skills)) {
    profile.skills = Array.isArray(profile.myStack) ? profile.myStack : [];
  }

  res.render("index", {
    title: `${profile.name} | Portfolio`,
    profile,
    projects
  });
};

module.exports = { home };
