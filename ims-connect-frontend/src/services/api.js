

import axios from 'axios';

// Get API URL from environment variables
const API_URL = process.env.REACT_APP_API_URL + '/api/ideas';

export const getIdeas = () => {
  return axios.get(API_URL);  // Fetch ideas from the API
};

export const submitIdea = (idea) => {
  return axios.post(API_URL, idea);  // Submit a new idea to the API
};

