import React from 'react';
import './JoinOurNetwork.css'; // Import your custom styles here

const JoinOurNetwork = () => {
    const benefits = [
        {
            title: "Flexible Work Schedule",
            description: "Enjoy the freedom to set your own hours and work from anywhere, making it easier to balance your professional and personal life.",
            image: "path_to_image_1.jpg", // Replace with actual image paths
        },
        {
            title: "Access to a Wide Patient Base",
            description: "Connect with patients from various backgrounds and locations, expanding your practice and impact.",
            image: "path_to_image_2.jpg", // Replace with actual image paths
        },
        {
            title: "Innovative Technology",
            description: "Utilize our state-of-the-art telemedicine platform for consultations, managing appointments, and accessing medical resources.",
            image: "path_to_image_3.jpg", // Replace with actual image paths
        },
        {
            title: "Professional Development",
            description: "Participate in ongoing training, webinars, and networking opportunities to enhance your skills and grow your career.",
            image: "path_to_image_4.jpg", // Replace with actual image paths
        },
        {
            title: "Supportive Community",
            description: "Join a network of like-minded healthcare professionals committed to providing high-quality care and improving patient outcomes.",
            image: "path_to_image_5.jpg", // Replace with actual image paths
        },
    ];

    return (
        <div className="join-network-container">
            <h1>Join Our Network</h1>
            <p>We're looking for dedicated healthcare professionals to enhance our telemedicine services.</p>

            <div className="benefits-list">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                        <h2>{benefit.title}</h2>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>

            <div className="application-info">
                <h2>How to Apply</h2>
                <p>To join our network, follow these simple steps:</p>
                <ol>
                    <li>Complete the online application form.</li>
                    <li>Submit your credentials and relevant experience.</li>
                    <li>Participate in a brief interview with our team.</li>
                    <li>Receive onboarding and training materials.</li>
                </ol>
                <p>Ready to make a difference? <a href="/apply">Apply Now!</a></p>
            </div>

            <footer className="network-footer">
                <p>If you have any questions, feel free to <a href="/contact">Contact Us</a>.</p>
            </footer>
        </div>
    );
};

export default JoinOurNetwork;
