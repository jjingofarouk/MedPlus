import React from 'react';
import './TelemedicineHowItWorks.css'; // Import any custom styles here

const TelemedicineHowItWorks = () => {
    return (
        <div className="telemedicine-container">
            <h1>How Telemedicine Works</h1>
            <p>
                Telemedicine is revolutionizing the way we receive healthcare. It allows patients to connect with healthcare providers remotely, ensuring that you can receive care no matter where you are. Below, we outline the key steps involved in the telemedicine process.
            </p>

            <section className="telemedicine-steps">
                <h2>Steps to Receive Care Online</h2>

                <div className="step">
                    <h3>1. Sign Up or Log In</h3>
                    <p>
                        Begin by creating an account on the telemedicine platform. You can easily sign up using your email or social media accounts. If you’re already a user, simply log in to your account.
                    </p>
                </div>

                <div className="step">
                    <h3>2. Fill Out Your Medical History</h3>
                    <p>
                        Once logged in, complete your medical history form. This helps your doctor understand your health background and current concerns. Ensure you provide accurate and detailed information.
                    </p>
                </div>

                <div className="step">
                    <h3>3. Schedule an Appointment</h3>
                    <p>
                        Choose a date and time that works for you to schedule a virtual consultation with a doctor. Most platforms offer various healthcare providers with different specializations.
                    </p>
                </div>

                <div className="step">
                    <h3>4. Prepare for Your Appointment</h3>
                    <p>
                        Prior to your appointment, gather any necessary documents, such as previous medical records or a list of medications. Find a quiet and private space with a stable internet connection for the consultation.
                    </p>
                </div>

                <div className="step">
                    <h3>5. Connect with Your Doctor</h3>
                    <p>
                        At the scheduled time, log in to the platform and join your virtual appointment. You will connect with your doctor via video or audio call. Make sure your device’s camera and microphone are functioning properly.
                    </p>
                </div>

                <div className="step">
                    <h3>6. Receive Diagnosis and Treatment</h3>
                    <p>
                        During the consultation, your doctor will assess your condition, provide a diagnosis, and suggest treatment options. This may include prescriptions, referrals to specialists, or recommendations for follow-up care.
                    </p>
                </div>

                <div className="step">
                    <h3>7. Follow-Up Care</h3>
                    <p>
                        After your appointment, you can follow up with your doctor if needed. Many platforms allow you to book additional appointments or communicate through messaging for ongoing support.
                    </p>
                </div>
            </section>

            <section className="telemedicine-benefits">
                <h2>Benefits of Telemedicine</h2>
                <ul>
                    <li>Convenience: Access healthcare from the comfort of your home.</li>
                    <li>Time-Saving: Reduce travel time and wait times in clinics.</li>
                    <li>Access to Specialists: Connect with healthcare providers who may not be locally available.</li>
                    <li>Continuity of Care: Maintain ongoing relationships with healthcare providers easily.</li>
                    <li>Cost-Effective: Often more affordable than in-person visits.</li>
                </ul>
            </section>

            <footer className="telemedicine-footer">
                <p>
                    For more information on telemedicine services, visit our <a href="/services">Services Page</a>.
                </p>
            </footer>
        </div>
    );
};

export default TelemedicineHowItWorks;
