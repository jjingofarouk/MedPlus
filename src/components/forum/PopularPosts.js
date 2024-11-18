import React from 'react';
import './PopularPosts.css';

const PopularPosts = ({ posts }) => {
  const sortedPosts = [...posts].sort((a, b) => b.replyCount - a.replyCount);
  return (
    <section className="popular-posts">
      <h2 className="section-title">Popular Posts</h2>
      <div className="card-container">
        {sortedPosts.slice(0, 5).map((post) => (
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
};

export default PopularPosts;
