const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
  },
  version: Number,
  lead: String,
  description: String,
  url: String,
  repo_url: String,
  img_src: String,
  img_alt: {
    type: String,
    default: "App image",
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
