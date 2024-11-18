import React, { useState } from 'react';

const BurnoutPrevention = () => {
  const [tips, setTips] = useState([
    { text: "Take regular breaks", category: "Self-Care", rating: 5 },
    { text: "Practice mindfulness", category: "Self-Care", rating: 4 },
    { text: "Reach out for support", category: "Social", rating: 5 },
  ]);

  const [newTip, setNewTip] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newRating, setNewRating] = useState(1);

  const handleAddTip = () => {
    if (newTip && newCategory) {
      setTips([...tips, { text: newTip, category: newCategory, rating: newRating }]);
      setNewTip("");
      setNewCategory("");
      setNewRating(1);
    }
  };

  const handleRemoveTip = (index) => {
    const updatedTips = tips.filter((_, i) => i !== index);
    setTips(updatedTips);
  };

  const averageRating = (tips.length > 0)
    ? (tips.reduce((acc, tip) => acc + tip.rating, 0) / tips.length).toFixed(2)
    : 0;

  return (
    <div>
      <h3>Burnout Prevention</h3>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            <span>{tip.text} - <strong>{tip.category}</strong> (Rating: {tip.rating})</span>
            <button onClick={() => handleRemoveTip(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTip}
        onChange={(e) => setNewTip(e.target.value)}
        placeholder="Add your own tip..."
      />
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Category (e.g., Self-Care)"
      />
      <input
        type="number"
        min="1"
        max="5"
        value={newRating}
        onChange={(e) => setNewRating(Number(e.target.value))}
        placeholder="Rate (1-5)"
      />
      <button onClick={handleAddTip}>Add Tip</button>
      
      <div>
        <h4>Statistics</h4>
        <p>Total Tips: {tips.length}</p>
        <p>Average Rating: {averageRating}</p>
      </div>
      
      <div>
        <h4>Educational Resources</h4>
        <ul>
          <li><a href="https://www.mindful.org/5-mindfulness-practices-for-burnout-prevention/" target="_blank" rel="noopener noreferrer">5 Mindfulness Practices for Burnout Prevention</a></li>
          <li><a href="https://www.psychologytoday.com/us/blog/better-mental-health/202010/burnout-recovery-tips" target="_blank" rel="noopener noreferrer">Burnout Recovery Tips</a></li>
          <li><a href="https://www.who.int/news-room/fact-sheets/detail/burn-out-an-occupational-phenomenon" target="_blank" rel="noopener noreferrer">WHO: Burn-out an Occupational Phenomenon</a></li>
        </ul>
      </div>
      
      <div>
        <h4>Mindfulness Techniques</h4>
        <p>Consider these relaxation techniques:</p>
        <ul>
          <li>Deep breathing exercises</li>
          <li>Guided meditations (e.g., <a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer">Headspace</a>)</li>
        </ul>
      </div>
      
      <div>
        <h4>Professional Help Resources</h4>
        <p>If you feel overwhelmed, reach out to a professional:</p>
        <ul>
          <li><a href="https://www.therapist.com/" target="_blank" rel="noopener noreferrer">Find a Therapist</a></li>
          <li><a href="https://www.nami.org/Home" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a></li>
        </ul>
      </div>
    </div>
  );
};

export default BurnoutPrevention;
