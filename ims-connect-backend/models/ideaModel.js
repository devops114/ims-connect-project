
const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Idea', ideaSchema);

