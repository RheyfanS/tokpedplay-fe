// src/pages/VideoDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import CommentList from '../components/CommentList';
import useCommentForm from '../hooks/useCommentForm';
import './VideoDetail.css';

const VideoDetail = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const { username, setUsername, comment, setComment, handleSubmit } = useCommentForm();

  useEffect(() => {
    const videoID = match.params.videoID;
    axios.get(`/api/products/${videoID}`).then(response => {
      setProducts(response.data);
    });
    axios.get(`/api/comments/${videoID}`).then(response => {
      setComments(response.data);
    });
  }, [match.params.videoID]);

  const handleCommentSubmit = () => {
    handleSubmit(
      match.params.videoID,
      () => {
        axios.get(`/api/comments/${match.params.videoID}`).then(response => {
          setComments(response.data);
        });
        setComment('');
      },
      error => {
        console.error(error);
      }
    );
  };

  return (
    <div className="video-detail">
      <h1>Video Detail Page</h1>
      <div className="products">
        {products.map(product => (
          <ProductItem key={product.productID} product={product} />
        ))}
      </div>
      <div className="comment-section">
        <h2>Leave a Comment</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};

export default VideoDetail;
