import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css'
import videoSrc from './dr.mp4'; // Adjust the path if necessary


function LandingPage() {
    return (
        <div className="landing-page">
            {/* Start Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>MedHub | Live Healthier!</h1>
                        <p>Step into a new era of healthcare with our state-of-the-art Telehealth System. Experience unparalleled convenience, secure access, and personalized care from the comfort of your home.</p>
                        <NavLink to="/signup" className="btn btn-secondary">Get Started</NavLink>
                    </div>
                    <video className="hero-video" autoPlay muted loop>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
</video>


                </div>
            </section>
            {/* End Hero Section */}
            
            {/* Start Features Section */}
            <section id='features' className="features">
                <div className="features-header">
                    <h2>Why Choose Our Platform?</h2>
                    <p>Our comprehensive features are designed to make healthcare management seamless and efficient for you.</p>
                </div>
                <div className="features-content">
                    <div className="features-grid">

                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src="images/appointments.svg" alt="Appointment Scheduling" />
                            </div>
                            <h3>Easy Appointment Scheduling</h3>
                            <p>Book and manage your appointments with top healthcare professionals at your convenience, with just a few clicks.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img src="images/messaging.svg" alt="Secure Messaging" />
                            </div>
                            <h3>Secure Messaging</h3>
                            <p>Communicate with your doctors securely, with full encryption to protect your private health information.</p>
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
                            <p>Manage your healthcare expenses effortlessly with our integrated Razorpay system, ensuring a smooth payment experience.</p>
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
                        <p>"MedHub has revolutionized how I manage my health. The ease of booking appointments and accessing my medical records is incredible!"</p>
                        <h4>Sumayya Namugga</h4>
                        <p>Patient</p>
                    </div>
                    <div className="testimonial-item">
                        <p>"As a healthcare provider, I appreciate the secure communication and streamlined record-keeping. It’s made my practice much more efficient."</p>
                        <h4>Dr. Kabagenyi Oliyer</h4>
                        <p>Healthcare Provider</p>
                    </div>
                </div>
            </section>
            {/* End Testimonials Section */}

            {/* Start Call-to-Action Section */}
            <section className="cta">
                <div className="cta-content">
                    <h2>Take Charge of Your Health Today!</h2>
                    <p>Join the thousands of users who have transformed their healthcare experience. Sign up now and start enjoying our advanced health management tools.</p>
                    <NavLink to='/patient/register' className="btn btn-secondary">Sign Up</NavLink>
                    <NavLink to='/patient/login' className="btn btn-outline">Log In</NavLink>
                </div>
            </section>

                            {/* start footer */}
                {/* start footer */}
            
        </div>
    );
}

export default LandingPage;
