// src/components/VideoThumbnail.js
import React from 'react';

const VideoThumbnail = ({ video }) => {
  return (
    <div className="video-thumbnail">
      <img src={video.thumbnailUrl} alt="Video Thumbnail" />
    </div>
  );
};

export default VideoThumbnail;
