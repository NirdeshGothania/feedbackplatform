// src/FeedbackForm.js
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ user }) => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/feedback', {
        category,
        rating,
        comments,
      }, {
        withCredentials: true,
      });
      alert('Feedback submitted successfully');
    } catch (error) {
      alert('Error submitting feedback');
    }
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Product Features">Product Features</option>
            <option value="Product Pricing">Product Pricing</option>
            <option value="Product Usability">Product Usability</option>
          </select>
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div>
          <label>Comments:</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
