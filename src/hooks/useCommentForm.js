// src/hooks/useCommentForm.js
import { useState } from 'react';
import axios from 'axios';

const useCommentForm = () => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (videoID, onSuccess, onError) => {
    try {
      await axios.post('/api/submit-comment', { username, comment, videoID });
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  return {
    username,
    setUsername,
    comment,
    setComment,
    handleSubmit
  };
};

export default useCommentForm;
