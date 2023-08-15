// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoThumbnail from '../components/VideoThumbnail';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/videos').then(response => {
      setVideos(response.data);
    });
  }, []);

  return (
    <div className="home">
      <h1>Home Page</h1>
      {videos.map(video => (
        <Link to={`/video/${video.videoID}`} key={video.videoID}>
          <VideoThumbnail video={video} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
