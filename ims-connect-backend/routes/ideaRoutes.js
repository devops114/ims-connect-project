
const express = require('express');
const Idea = require('../models/ideaModel');
const Vote = require('../models/voteModel');
const User = require('../models/userModel');

const router = express.Router();

// Get all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find().populate('votes');
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit a new idea
router.post('/', async (req, res) => {
  const { title, description, createdBy } = req.body;
  const newIdea = new Idea({ title, description, createdBy });
  try {
    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Vote on an idea
router.post('/:id/vote', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const idea = await Idea.findById(id);
    const user = await User.findById(userId);
    if (!idea || !user) {
      return res.status(404).json({ message: 'Idea or user not found' });
    }

    const newVote = new Vote({ user: user._id, idea: idea._id });
    await newVote.save();
    idea.votes.push(newVote);
    await idea.save();
    res.status(201).json(newVote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

