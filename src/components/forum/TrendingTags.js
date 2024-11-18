import React from 'react';
import './TrendingTags.css';

const TrendingTags = () => {
  // Example trending tags
  const trendingTags = ['COVID-19', 'Medical Research', 'Health Tips', 'Vaccinations'];

  return (
    <section className="trending-tags">
      <h2 className="section-title">Trending Tags</h2>
      <div className="tags-container">
        {trendingTags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrendingTags;
