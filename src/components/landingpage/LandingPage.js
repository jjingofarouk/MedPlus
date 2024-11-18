import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';
import videoSrc from './dr.mp4'; // Adjust the path if necessary

function LandingPage() {
    const videoRef = useRef(null); // Define videoRef
    const [isPlaying, setIsPlaying] = useState(false); // Define isPlaying

    const togglePlayPause = () => { // Define togglePlayPause
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="landing-page">
            {/* Start Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>We Care!</h1>
                        <NavLink to="/signup" className="btn btn-secondary">Get Started</NavLink>
                    </div>
                    <video className="hero-video" autoPlay muted loop ref={videoRef}>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="video-control-btn" onClick={togglePlayPause}>
                        <span className="video-control-icon" aria-hidden="true">
                            {isPlaying ? 'Pause' : 'Play'}
                        </span>
                    </button>
                </div>
            </section>
            {/* End Hero Section */}

            {/* Start Features Section */}
            <section id='features' className="features">
                <div className="features-header">
                    <h2>Why Choose Our Platform?</h2>
                    <p>We have comprehensive features designed to make healthcare management seamless and efficient for you.</p>
                </div>
                <div className="features-content">
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src="H:\Med\emr-develop\frontend\src\components\landingpage\images\appointments.svg" alt="Appointment Scheduling" />
                            </div>
                            <h3>Easy Appointment Scheduling</h3>
                            <p>Book and manage your appointments with the best healthcare professionals at your convenience, with just a few clicks.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src="images/messaging.svg" alt="Secure Messaging" />
                            </div>
                            <h3>Secure Messaging</h3>
                            <p>Communicate with your doctors or patients securely, with full encryption to protect your private health information.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src="images/records.svg" alt="Electronic Medical Records" />
                            </div>
                            <h3>Electronic Medical Records</h3>
                            <p>Access and manage your medical history anytime, anywhere. Our electronic records system ensures you’re always up-to-date.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src="images/payments.svg" alt="Online Payment System" />
                            </div>
                            <h3>Streamlined Payments</h3>
                            <p>Manage your healthcare expenses effortlessly with our integrated payment system, ensuring a smooth payment experience.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Section */}

            {/* Start Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Users Are Saying</h2>
                <div className="testimonials-content">
                    <div className="testimonial-item">
                        <div className="testimonial-photo">
                            <img src="images/suma.jpg" alt="Sumayya Namugga" />
                        </div>
                        <p>"MedHub has revolutionized how I manage my health. The ease of booking appointments and accessing my medical records is incredible!"</p>
                        <h4>Sumayya Namugga</h4>
                        <p>Patient</p>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-photo">
                            <img src="images/oliyer.jpg" alt="Dr. Kabagenyi Oliyer" />
                        </div>
                        <p>"As a healthcare provider, I appreciate the secure communication and streamlined record-keeping. It’s made my practice much more efficient."</p>
                        <h4>Dr. Kabagenyi Oliyer</h4>
                        <p>Healthcare Provider</p>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-photo">
                            <img src="images/dr.jpg" alt="Kisekka Moses" />
                        </div>
                        <p>"The platform has made my job so much easier with its intuitive interface and reliable functionality. Highly recommended!"</p>
                        <h4>Kisekka Moses</h4>
                        <p>Administrator</p>
                    </div>
                </div>
            </section>
            {/* End Testimonials Section */}

            {/* Start Call-to-Action Section */}
            <section className="cta">
                <div className="cta-content">
                    <h2>Take Charge of Your Health Today!</h2>
                    <p>Join the thousands of users who have transformed their healthcare experience. Sign up now and start enjoying our advanced health management tools.</p>
                    <NavLink to='/signup' className="btn btn-secondary">Sign Up</NavLink>
                </div>
            </section>

            {/* Include Footer */}
  
        </div>
    );
}

export default LandingPage;
