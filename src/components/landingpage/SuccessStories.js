import React from 'react';
import './SuccessStories.css'; // Import your custom styles here

const SuccessStories = () => {
    const stories = [
        {
            title: "Transforming Lives with Telemedicine",
            content: "Meet Sarah, a rural resident who struggled to access healthcare. Through our telemedicine platform, she connected with specialists from urban centers, receiving timely diagnosis and treatment.",
            image: "path_to_image_1.jpg", // Replace with actual image paths
        },
        {
            title: "Bridging the Gap",
            content: "John, a busy professional, found it challenging to fit doctor appointments into his schedule. With our app, he was able to consult with a physician during his lunch break, leading to a successful management plan for his health.",
            image: "path_to_image_2.jpg", // Replace with actual image paths
        },
        {
            title: "Family Health Made Easy",
            content: "The Martinez family used our platform to manage their healthcare together. From pediatric consultations to adult wellness checks, they found the support they needed without the stress of travel.",
            image: "path_to_image_3.jpg", // Replace with actual image paths
        },
    ];

    return (
        <div className="success-stories-container">
            <h1>Success Stories</h1>
            <p>Read about successful partnerships that highlight the impact of telemedicine in our community.</p>

            <div className="stories-list">
                {stories.map((story, index) => (
                    <div key={index} className="story-card">
                        <img src={story.image} alt={story.title} className="story-image" />
                        <h2>{story.title}</h2>
                        <p>{story.content}</p>
                    </div>
                ))}
            </div>

            <footer className="stories-footer">
                <p>Want to share your story? <a href="/contact">Contact us</a> to get started!</p>
            </footer>
        </div>
    );
};

export default SuccessStories;
