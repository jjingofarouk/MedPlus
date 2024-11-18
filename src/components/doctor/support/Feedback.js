import React, { useState } from 'react';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState("Content");
  const [editIndex, setEditIndex] = useState(null);
  const [editFeedback, setEditFeedback] = useState("");

  const handleSubmitFeedback = () => {
    if (newFeedback) {
      const feedbackEntry = { id: feedbacks.length + 1, text: newFeedback, rating, category };
      setFeedbacks([...feedbacks, feedbackEntry]);
      resetForm();
    }
  };

  const handleEditFeedback = (index) => {
    const feedbackToEdit = feedbacks[index];
    setEditIndex(index);
    setEditFeedback(feedbackToEdit.text);
    setRating(feedbackToEdit.rating);
    setCategory(feedbackToEdit.category);
  };

  const handleUpdateFeedback = () => {
    if (editFeedback) {
      const updatedFeedbacks = feedbacks.map((fb, index) =>
        index === editIndex ? { ...fb, text: editFeedback, rating, category } : fb
      );
      setFeedbacks(updatedFeedbacks);
      resetForm();
      setEditIndex(null);
    }
  };

  const handleDeleteFeedback = (index) => {
    const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(updatedFeedbacks);
  };

  const resetForm = () => {
    setNewFeedback("");
    setRating(5);
    setCategory("Content");
    setEditFeedback("");
  };

  const averageRating = feedbacks.length
    ? (feedbacks.reduce((acc, fb) => acc + fb.rating, 0) / feedbacks.length).toFixed(2)
    : 0;

  return (
    <div>
      <h3>Feedback</h3>
      <textarea
        value={newFeedback}
        onChange={(e) => setNewFeedback(e.target.value)}
        placeholder="Write your feedback..."
        rows={4}
      />
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Content">Content</option>
          <option value="Usability">Usability</option>
          <option value="Suggestions">Suggestions</option>
        </select>
      </div>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Fair</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Very Good</option>
          <option value={5}>5 - Excellent</option>
        </select>
      </div>
      {editIndex !== null ? (
        <button onClick={handleUpdateFeedback}>Update Feedback</button>
      ) : (
        <button onClick={handleSubmitFeedback}>Submit Feedback</button>
      )}

      <h4>Previous Feedback (Average Rating: {averageRating})</h4>
      <ul>
        {feedbacks.map((fb, index) => (
          <li key={fb.id}>
            {fb.text} - {fb.rating} stars - <strong>{fb.category}</strong>
            <button onClick={() => handleEditFeedback(index)}>Edit</button>
            <button onClick={() => handleDeleteFeedback(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
