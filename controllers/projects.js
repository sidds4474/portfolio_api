const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.getProjects = async (req, res) => {
  const projects = await Project.find({});
  return res.json(projects);
}