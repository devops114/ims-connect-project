
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getIdeas } from '../services/api';  // Import the API call

function IdeaList() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas()
      .then(response => {
        setIdeas(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the ideas!', error);
      });
  }, []);

  return (
    <div>
      <h2>All Ideas</h2>
      {ideas.map(idea => (
        <div key={idea._id}>
          <h3><Link to={`/idea/${idea._id}`}>{idea.title}</Link></h3>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  );
}

export default IdeaList;

