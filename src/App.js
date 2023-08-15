// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoID" element={<VideoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
