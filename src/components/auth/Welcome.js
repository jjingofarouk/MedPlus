import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Calendar, Video, ActivitySquare, Users, Search } from 'lucide-react';

const AnimatedFeatureCard = ({ icon: Icon, title, description, delay }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay,
  });

  return (
    <animated.div style={props} className="feature-card">
      <Icon size={48} />
      <h3>{title}</h3>
      <p>{description}</p>
    </animated.div>
  );
};

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideProps = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(100%)' },
    reset: true,
    config: config.molasses,
  });

  const titleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
  });

  const subtitleProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
    config: config.molasses,
  });

  return (
    <div className="welcome-container">
      <main className="welcome-main">
        <animated.h1 style={titleProps} className="welcome-title">Welcome to MedHub</animated.h1>
        <animated.p style={subtitleProps} className="welcome-subtitle">Your comprehensive telehealth solution</animated.p>

        <animated.div style={slideProps} className="slide-container">
          {currentSlide === 0 && (
            <section className="app-overview">
              <h2>Discover MedHub</h2>
              <p>Experience the future of healthcare with our comprehensive telehealth platform:</p>
              <ul>
                <li>Easy appointment scheduling</li>
                <li>Secure video consultations</li>
                <li>Advanced symptom checker</li>
                <li>Engaging health Community</li>
                <li>Quick access to nearby healthcare services</li>
              </ul>
            </section>
          )}

          {currentSlide === 1 && (
            <div className="features-grid">
              <AnimatedFeatureCard
                icon={Calendar}
                title="Appointment Scheduling"
                description="Book appointments with specialists at your convenience"
                delay={0}
              />
              <AnimatedFeatureCard
                icon={Video}
                title="Video Consultations"
                description="Connect with healthcare professionals through secure video calls"
                delay={200}
              />
              <AnimatedFeatureCard
                icon={ActivitySquare}
                title="Symptom Checker"
                description="Get preliminary insights about your health concerns"
                delay={400}
              />
              <AnimatedFeatureCard
                icon={Users}
                title="Health Community"
                description="Engage with communities and share experiences"
                delay={600}
              />
              <AnimatedFeatureCard
                icon={Search}
                title="Quick Care Connect"
                description="Find nearby hospitals, pharmacies, and emergency services"
                delay={800}
              />
            </div>
          )}

          {currentSlide === 2 && (
            <section className="how-it-works">
              <h2>How MedHub Works</h2>
              <ol>
                <li>Complete your health profile for personalized care</li>
                <li>Use the symptom checker for initial guidance</li>
                <li>Schedule an appointment or start a consultation</li>
                <li>Receive expert care and follow-up recommendations</li>
                <li>Access your health records and prescriptions anytime</li>
              </ol>
            </section>
          )}

          {currentSlide === 3 && (
            <section className="testimonials">
              <h2>What Our Users Say</h2>
              <div className="testimonial-container">
                <div className="testimonial">
                  <p>"MedHub's video consultations saved me time and provided great care!"</p>
                  <span>- Emily R.</span>
                </div>
                <div className="testimonial">
                  <p>"The symptom checker helped me decide when to seek professional help."</p>
                  <span>- Michael T.</span>
                </div>
              </div>
            </section>
          )}

          {currentSlide === 4 && (
            <section className="get-started">
              <h2>Ready to Take Control of Your Health?</h2>
              <button className="cta-button" onClick={() => console.log('Navigate to dashboard')}>
                Explore MedHub
              </button>
            </section>
          )}
        </animated.div>

        <div className="slide-indicators">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Welcome;
