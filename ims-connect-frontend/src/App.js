
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IdeaList from './components/IdeaList';  // Assuming IdeaList is in the same folder
import IdeaSubmission from './components/IdeaSubmission';  // Same for IdeaSubmission
import IdeaDetails from './components/IdeaDetails';  // Correct path to IdeaDetails

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IdeaList />} />
        <Route path="/submit" element={<IdeaSubmission />} />
        <Route path="/idea/:id" element={<IdeaDetails />} /> {/* Correct path to IdeaDetails */}
      </Routes>
    </Router>
  );
}

export default App;

