const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.getProjects = async (req, res) => {
  const projects = await Project.find({});
  return res.json(projects);
}

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    return res.json(project);
  } catch(error) {
    return res.status(422).send(error.message);
  }

}

exports.createProject = async (req, res) => {
  const projectData = req.body;
  // Todo: Exctract from req!
  const userId = 'google-oauth2|106167027510817616810';
  const project = new Project(projectData);
  project.userId = userId;

  try {
    const newProject = await project.save();
    return res.json(newProject);
  } catch(error) {
    return res.status(422).send(error.message);
  }
}


// exports.createProject = async (req, res) => {

//   const projectData = req.body;
//   console.log(projectData)
//   return res.json('Hello there!!!')
// }