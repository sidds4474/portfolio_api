const { projects } = require('./data');
const Project = require('../db/models/project');

class FakeDB {

  async clean() {
    await Project.deleteMany({});
  }

  async addData() {
    await Project.create(projects);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDB();