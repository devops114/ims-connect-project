
const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  idea: { type: mongoose.Schema.Types.ObjectId, ref: 'Idea' },
});

module.exports = mongoose.model('Vote', voteSchema);

