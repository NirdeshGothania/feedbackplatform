// src/FeedbackList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const result = await axios.get('http://localhost:3000/feedback-list');
      setFeedback(result.data);
    };
    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>Feedback List</h2>
      {feedback.map(item => (
        <div key={item._id}>
          <h3>{item.category}</h3>
          <p>Rating: {item.rating}</p>
          <p>{item.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
