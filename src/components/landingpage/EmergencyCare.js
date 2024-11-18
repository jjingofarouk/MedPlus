import React from 'react';
import './EmergencyCare.css'; // Import your custom styles here
import Nav from './Nav';
import Footer from './Footer';

const EmergencyCare = () => {
    return (
        <div className="emergency-care-container">
            <Nav/>
            <h1>Emergency Care Services</h1>
            <p>Our telemedicine platform provides immediate access to emergency medical care, ensuring you receive the assistance you need, when you need it.</p>

            <section className="service-details">
                <h2>What We Offer</h2>
                <ul>
                    <li><strong>24/7 Availability:</strong> Our emergency services are available round the clock, so you can connect with a healthcare professional anytime.</li>
                    <li><strong>Virtual Consultations:</strong> Speak with qualified doctors via video call for real-time assessments and guidance.</li>
                    <li><strong>Symptom Checker:</strong> Use our online tool to evaluate symptoms and determine if you need immediate care.</li>
                    <li><strong>Referral Services:</strong> If necessary, our doctors can refer you to local emergency services or specialists for further assistance.</li>
                </ul>
            </section>

            <section className="benefits">
                <h2>Benefits of Our Emergency Care</h2>
                <ul>
                    <li>Quick access to medical expertise without the need for travel.</li>
                    <li>Reduced wait times compared to traditional emergency rooms.</li>
                    <li>Convenience of receiving care from the comfort of your home.</li>
                    <li>Peace of mind knowing that help is always available.</li>
                </ul>
            </section>

            <section className="contact-info">
                <h2>Need Immediate Assistance?</h2>
                <p>If you're experiencing a medical emergency, please call your local emergency services immediately. For non-life-threatening emergencies, you can connect with us through the following:</p>
                <ul>
                    <li><strong>Phone:</strong> +256-777-421-601</li>
                    <li><strong>Email:</strong> support@medhub.ug</li>
                    <li><strong>Live Chat:</strong> Available on our website 24/7</li>
                </ul>
            </section>

<Footer/>
        </div>
    );
};

export default EmergencyCare;
