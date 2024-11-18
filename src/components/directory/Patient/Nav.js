import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Nav.css'; // Ensure you import the CSS file

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll event to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      title: 'Patients',
      description: 'Explore various resources and services available for patients.',
      dropdownItems: [
        {
          title: 'Services',
          items: [
            { title: '24/7 Medical Consultations', description: 'Connect with a doctor anytime for immediate assistance.', link: '/medical-consultations', linkText: 'Contact Us' },
          ],
        },
        {
          title: 'Explore Care Options',
          items: [
            { title: 'How Telemedicine Works', description: 'Understand the process of receiving care online.', link: '/how-it-works' },
            { title: 'FAQs', description: 'Find answers to common questions about our services.' , link: '/faqs' },
          ],
        },
      ],
    },
    {
      title: 'hospitals & Partners',
      description: 'Discover collaboration opportunities and resources for hospitals.',
      dropdownItems: [
        {
          title: 'Partnerships & Employers',
          items: [
            { title: 'Success Stories', description: 'Read about successful partnerships.' , link: '/success-stories' },
          ],
        },
        {
          title: 'Insurance Providers & Clinics',
          items: [
            { title: 'Telemedicine Platform', description: 'Information on our telemedicine offerings.' , link: '/telemedicine-platform'},
            { title: 'Emergency Care', description: 'Learn about our emergency services.' , link: '/emergency-care' },
          ],
        },
      ],
    },
    {
      title: 'Healthcare Providers',
      description: 'Join our network and explore career opportunities in healthcare.' ,
      dropdownItems: [
        {
          title: 'Join Our Network & Careers',
          items: [
            { title: 'Join Our Network', description: 'Opportunities for healthcare professionals to join us.' , link: '/join-us' },
          ],
        },
        {
          title: 'Leadership & Innovation',
          items: [
            { title: 'Clinical Leadership', description: 'Meet our leadership team focused on healthcare innovation.' },
            { title: 'Open Positions', description: 'Explore various career openings available.' },
          ],
        },
      ],
    },
    {
      title: 'About MedHub',
      description: 'Learn about our mission, vision, and the resources we offer.',
      dropdownItems: [
        {
          title: 'Our Story & Resources',
          items: [
            { title: 'Our Vision', description: 'Discover our goals and aspirations.' },
            { title: 'Case Studies', description: 'Examples of our impact in the community.' },
          ],
        },
        {
          title: 'News & Contact',
          items: [
            { title: 'Press Releases', description: 'Stay updated with our latest news.' },
            { title: 'Get in touch with us', link: '/contact', linkText: 'Contact Us' },
          ],
        },
      ],
    },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" className="logo">MedHub</Link>
      </div>

      <div className="navbar-menu">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className={`navbar-item ${activeDropdown === item.title ? 'active' : ''}`}
          >
            <button
              className="navbar-link"
              onClick={() => toggleDropdown(item.title)}
            >
              {item.title}
              {activeDropdown === item.title ? <ChevronUp className="dropdown-icon" /> : <ChevronDown className="dropdown-icon" />}
            </button>
            {activeDropdown === item.title && (
              <div className="dropdown-menu">
                <div className="dropdown-description-column">
                  <p className="dropdown-description">{item.description}</p>
                </div>
                <div className="dropdown-content-column">
                  {item.dropdownItems.map((dropdownItem, index) => (
                    <div key={index} className="dropdown-column">
                      <h3 className="dropdown-title">{dropdownItem.title}</h3>
                      {dropdownItem.items && (
                        <ul className="dropdown-list">
                          {dropdownItem.items.map((subItem, subIndex) => (
                            <li key={subIndex} className="dropdown-list-item">
                              {subItem.link ? (
                                <Link to={subItem.link} className="dropdown-item">
                                  {subItem.title}
                                </Link>
                              ) : (
                                <span className="dropdown-item">{subItem.title || 'Untitled'}</span>
                              )}
                              {subItem.description && <p>{subItem.description}</p>}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="navbar-actions">
        <Link to="/talk-to-doctor" className="nav-action">Talk to a doctor</Link>
        <Link to="/login" className="nav-action">Sign In</Link>
        <Link to="/register" className="nav-action btn-register">Register now</Link>
      </div>
    </nav>
  );
};

export default Nav;
