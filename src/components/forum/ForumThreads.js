import React from 'react';
import './ForumThreads.css';

const ForumThreads = ({ posts }) => (
  <section className="forum-threads">
    <h2 className="section-title">Forum Threads</h2>
    <div className="card-container">
      {posts.map((post) => (
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

export default ForumThreads;
