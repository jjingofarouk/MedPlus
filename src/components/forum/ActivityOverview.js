import React from 'react';
import './ActivityOverview.css';

const ActivityOverview = ({ activities }) => (
  <section className="activity-overview">
    <h2 className="section-title">Activity Overview</h2>
    <div className="activity-container">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <p>{activity.description}</p>
          <span className="activity-time">{new Date(activity.time).toLocaleString()}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ActivityOverview;
