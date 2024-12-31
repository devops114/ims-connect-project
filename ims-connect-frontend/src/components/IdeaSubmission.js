
import React, { useState } from 'react';
import { submitIdea } from '../services/api';  // Import the API call

function IdeaSubmission() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIdea = { title, description, createdBy: 'user_id_here' };
    try {
      await submitIdea(newIdea);  // Call the API to submit the idea
      alert('Idea submitted successfully');
    } catch (error) {
      alert('Error submitting idea');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Submit Idea</button>
    </form>
  );
}

export default IdeaSubmission;

