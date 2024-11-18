import React from 'react';

const Progress = () => {
    return (
        <div className="progress-container">
            <h2>Progress Towards Health Goals</h2>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: '70%' }}></div>
            </div>
            <p>70% to your goal!</p>
        </div>
    );
};

export default Progress;
