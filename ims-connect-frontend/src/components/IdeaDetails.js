
// src/components/IdeaDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IdeaDetails() {
  const { id } = useParams();  // Get the idea id from the URL params
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    // Fetch the idea details from the backend API based on the id
    axios.get(`http://localhost:5000/api/ideas/${id}`)
      .then(response => {
        setIdea(response.data);  // Store the idea in the state
      })
      .catch(error => {
        console.error('There was an error fetching the idea details!', error);
      });
  }, [id]);

  if (!idea) {
    return <div>Loading...</div>;  // Loading state while fetching the idea
  }

  return (
    <div>
      <h2>{idea.title}</h2>
      <p>{idea.description}</p>
      <p><strong>Submitted by:</strong> {idea.createdBy}</p>
      {/* Add any other details you want to show about the idea */}
    </div>
  );
}

export default IdeaDetails;

