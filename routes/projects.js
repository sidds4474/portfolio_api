const express = require('express');
const router = express.Router();
//const { getProjects, getProjectById } = require('../controllers/projects');

const {
  getProjects,
  getProjectById,
  createProject } = require('../controllers/projects');


router.get('', getProjects);
router.get('/:id', getProjectById);
router.post('', createProject);

module.exports = router;