import React from 'react';
import './TelemedicinePlatform.css'; // Import your custom styles here

const TelemedicinePlatform = () => {
    const offerings = [
        {
            title: "Virtual Consultations",
            description: "Connect with licensed healthcare professionals from the comfort of your home. Our platform offers 24/7 access to consultations via video, phone, or chat.",
            image: "path_to_image_1.jpg", // Replace with actual image paths
        },
        {
            title: "Appointment Scheduling",
            description: "Easily book appointments with specialists that fit your schedule. Our intuitive system allows you to choose your preferred time and provider.",
            image: "path_to_image_2.jpg", // Replace with actual image paths
        },
        {
            title: "Symptom Checker",
            description: "Use our AI-powered symptom checker to understand your health concerns before consulting with a doctor. Get instant insights on potential conditions.",
            image: "path_to_image_3.jpg", // Replace with actual image paths
        },
        {
            title: "Health Community",
            description: "Join our community Community to discuss health topics, share experiences, and get advice from both peers and professionals.",
            image: "path_to_image_4.jpg", // Replace with actual image paths
        },
        {
            title: "Comprehensive Health Directory",
            description: "Access a wide range of health resources and information, including medications, conditions, and wellness tips to help you manage your health effectively.",
            image: "path_to_image_5.jpg", // Replace with actual image paths
        },
    ];

    return (
        <div className="telemedicine-platform-container">
            <h1>Our Telemedicine Offerings</h1>
            <p>Explore how our telemedicine platform can enhance your healthcare experience.</p>

            <div className="offerings-list">
                {offerings.map((offering, index) => (
                    <div key={index} className="offering-card">
                        <img src={offering.image} alt={offering.title} className="offering-image" />
                        <h2>{offering.title}</h2>
                        <p>{offering.description}</p>
                    </div>
                ))}
            </div>

            <footer className="platform-footer">
                <p>Ready to experience our telemedicine services? <a href="/register">Sign up now!</a></p>
            </footer>
        </div>
    );
};

export default TelemedicinePlatform;
