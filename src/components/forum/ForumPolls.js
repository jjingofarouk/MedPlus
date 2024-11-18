import React from 'react';
import './ForumPolls.css';

const ForumPolls = () => {
  // Example poll data
  const polls = [
    { question: 'What’s your favorite medical topic?', options: ['Cardiology', 'Neurology', 'Oncology'] },
    { question: 'How often do you visit the forum?', options: ['Daily', 'Weekly', 'Monthly'] },
  ];

  return (
    <section className="forum-polls">
      <h2 className="section-title">Forum Polls</h2>
      <div className="polls-container">
        {polls.map((poll, index) => (
          <div key={index} className="poll-card">
            <p>{poll.question}</p>
            <ul>
              {poll.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForumPolls;
