import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routing
import Nav from './Nav';
import Footer from './Footer';

const MedicalConsultations = () => {
    return (
        <div className="consultation-page">
            <Nav />
            <section className="consultation-header">
                <h1>24/7 Medical Consultations</h1>
                <p>Connect with a doctor anytime for immediate assistance. Our certified healthcare professionals are available around the clock to provide you with expert advice and treatment options.</p>
                <Link to="/consultations" className="consultation-button">
                    Get Immediate Assistance
                </Link>
            </section>

            <section className="consultation-details">
                <h2>Why Choose Our 24/7 Consultations?</h2>
                <ul>
                    <li><strong>Accessibility:</strong> Consult with qualified doctors from the comfort of your home, any time of day or night.</li>
                    <li><strong>Expert Care:</strong> Our team consists of licensed medical professionals with experience in various specialties.</li>
                    <li><strong>Quick Response:</strong> Receive prompt assistance for urgent medical concerns without long wait times.</li>
                    <li><strong>Confidentiality:</strong> All consultations are private and secure, ensuring your health information is protected.</li>
                </ul>
            </section>

            <section className="consultation-process">
                <h2>How It Works</h2>
                <ol>
                    <li><strong>Sign Up:</strong> Create your account on MedHub to access 24/7 consultations.</li>
                    <li><strong>Schedule or Connect:</strong> Choose to schedule an appointment or connect instantly with a doctor.</li>
                    <li><strong>Consultation:</strong> Engage in a video or chat consultation, where you can discuss your symptoms and get advice.</li>
                    <li><strong>Follow-Up:</strong> Receive follow-up care or referrals if necessary, ensuring continuous support.</li>
                </ol>
            </section>

            <section className="consultation-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h4>What types of conditions can be treated?</h4>
                    <p>Our doctors can assist with a variety of non-emergency conditions, including cold and flu symptoms, allergies, skin issues, mental health concerns, and more.</p>
                </div>
                <div className="faq-item">
                    <h4>Do I need insurance to use this service?</h4>
                    <p>No, our consultations are available to everyone. We offer transparent pricing for those without insurance.</p>
                </div>
                <div className="faq-item">
                    <h4>How do I prepare for my consultation?</h4>
                    <p>Have any relevant medical history, current medications, and a list of your symptoms ready to share with your doctor during the consultation.</p>
                </div>
                <div className="faq-item">
                    <h4>Is the consultation confidential?</h4>
                    <p>Yes, all consultations are private and follow strict confidentiality guidelines.</p>
                </div>
            </section>

<Footer />
        </div>
    );
};

export default MedicalConsultations;
