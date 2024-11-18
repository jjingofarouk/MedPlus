import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is MedHub?",
            answer: "MedHub is a telemedicine app that provides easy appointment scheduling, online consultations, a symptom checker, health Community, and a comprehensive health directory."
        },
        {
            question: "How do I schedule an appointment?",
            answer: "To schedule an appointment, simply log into your MedHub account, navigate to the 'Appointments' section, select your desired provider, and choose a suitable time slot."
        },
        {
            question: "Is there a cost for consultations?",
            answer: "Consultation costs may vary based on the provider and the type of service. You can view the pricing details during the appointment scheduling process."
        },
        {
            question: "Can I consult with a doctor without downloading the app?",
            answer: "No, to access consultations and other features, you need to download the MedHub app from the App Store or Google Play."
        },
        {
            question: "What if I forget my password?",
            answer: "If you forget your password, click on the 'Forgot Password?' link on the login page. Follow the instructions sent to your registered email to reset it."
        },
        {
            question: "How does the symptom checker work?",
            answer: "The symptom checker allows you to input your symptoms, and it provides a list of potential conditions based on the information you provide. It's a useful tool, but it doesn't replace professional medical advice."
        },
        {
            question: "Can I access my medical records through MedHub?",
            answer: "Yes, you can securely access your medical records through your MedHub account, provided your healthcare provider has integrated their services with our platform."
        },
        {
            question: "Is my data secure with MedHub?",
            answer: "Yes, we prioritize your privacy and data security. MedHub uses advanced encryption and complies with health regulations to protect your information."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team through the 'Help' section in the app, or by emailing support@medhub.com."
        },
        {
            question: "Are there any Community for user discussions?",
            answer: "Yes, MedHub features Community where users can discuss health topics, share experiences, and support each other. You can access the Community from the main menu."
        }
    ];

    const toggleAnswer = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <Nav />
            <h2>Frequently Asked Questions</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3 onClick={() => toggleAnswer(index)} className="faq-question">
                            {faq.question}
                            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                        </h3>
                        {activeIndex === index && (
                            <p className="faq-answer">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
            <Footer/>
        </section>
    );
};

export default FAQs;
