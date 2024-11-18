import React from 'react';
import './RecentDiscussions.css';

const RecentDiscussions = ({ posts }) => (
  <section className="recent-discussions">
    <h2 className="section-title">Recent Discussions</h2>
    <div className="card-container">
      {posts.slice(0, 5).map((post) => (
        <div key={post.id} className="card">
          <a href={`/post-detail/${post.id}`} className="card-title">
            {post.title}
          </a>
          <div className="card-details">
            <span>{post.user.username}</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
            <span>{post.replyCount} replies</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RecentDiscussions;
