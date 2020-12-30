const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String,  maxlength: 128 },
  company: { type: String, maxlength: 64},
  companyWebsite: { type: String,  maxlength: 128},
  location: { type: String },
  jobTitle: { type: String},
  description: { type: String },
  startDate: { type: Date},
  endDate: { type: Date },
  userId: { type: String},
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Project', projectSchema);