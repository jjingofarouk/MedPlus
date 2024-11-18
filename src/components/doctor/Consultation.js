import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Video, MessageSquare, Calendar, Activity, FileText, HelpCircle, Bell, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './StartConsultation.css';

// Define itemVariants for motion animations
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const ConsultationOption = ({ to, Icon, text }) => (
  <motion.div variants={itemVariants} initial="hidden" animate="visible">
    <Link to={to} className="grid-item">
      <Icon className="icon" />
      <span className="text">{text}</span>
    </Link>
  </motion.div>
);

const MoreOption = ({ to, Icon, text }) => (
  <li>
    <Link to={to} className="more-option">
      <Icon className="w-5 h-5 mr-2" />
      <span>{text}</span>
      <ChevronRight className="w-4 h-4 ml-auto" />
    </Link>
  </li>
);

const Consultation = () => {
  const [showNotification, setShowNotification] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const handleNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const consultationOptions = [
    { to: "/video", Icon: Video, text: "Start Video Call" },
    { to: "/chat", Icon: MessageSquare, text: "Start Chat" },
    { to: "/appointments", Icon: Calendar, text: "Manage Appointments" },
    { to: "/records", Icon: FileText, text: "Patient Records" },  // New Option
  ];

  const moreOptions = [
    { to: "/symptom", Icon: Activity, text: "Use Symptom Checker" },
    { to: "/cares", Icon: FileText, text: "View Care Plans" },
    { to: "/consultation-history", Icon: FileText, text: "Consultation History" }, // New Option
  ];

  return (
    <div className="consult">
      <div className="cons">
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Start a Consultation
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Select the type of consultation or explore more options below:
        </motion.p>
        
        <motion.div 
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {consultationOptions.map((option, index) => (
            <ConsultationOption key={index} {...option} />
          ))}
        </motion.div>
        
        <motion.div 
          className="more-options-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="card-title">More Options</h2>
          <ul className="space-y-4">
            {moreOptions.map((option, index) => (
              <MoreOption key={index} {...option} />
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="help-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="help-card-decoration"></div>
          <h2 className="card-title">Need Help?</h2>
          <p className="help-text">If you need assistance with starting a consultation, please contact our support team.</p>
          <div className="button-group">
            <Link to="/feedback" className="primary-button">
              <HelpCircle className="w-5 h-5 mr-2" />
              <span>Contact Support</span>
            </Link>
            <button 
              onClick={handleNotification}
              className="secondary-button"
            >
              <Bell className="notifications" />
              <span>Get Notifications</span>
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showNotification && (
          <motion.div 
            className="notification"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Bell className="w-5 h-5 mr-2" />
            <span>You'll receive notifications for new consultations</span>
            <button 
              onClick={() => setShowNotification(false)}
              className="close-button"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Consultation;
