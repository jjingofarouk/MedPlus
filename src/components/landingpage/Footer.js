import React from "react";
import "./Footer.css"; // Assuming you're using external CSS for styling

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#002432", color: "#dfe4e5", padding: "50px 0", fontFamily: "'Roboto', sans-serif" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Headquarters Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
          <h4 style={{ color: "#27c7b8", fontSize: "1.4rem", marginBottom: "15px" }}>MedHub Headquarters</h4>
          <p>MedHub Telehealth, Ltd.<br /> Plot 15 Lumumba Ave.<br /> Kampala, Uganda</p>
          <p style={{ marginTop: "20px" }}>Bringing quality healthcare to every Ugandan, wherever they are.</p>
        </div>

        {/* For patients Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
          <h4 style={{ color: "#27c7b8", fontSize: "1.4rem", marginBottom: "15px" }}>For patients</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>24/7 Medical Assistance</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Mental Health Services</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Chronic Disease Management</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Nutrition and Wellness</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Pediatrics</a></li>
          </ul>
        </div>

        {/* For hospitals Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
          <h4 style={{ color: "#27c7b8", fontSize: "1.4rem", marginBottom: "15px" }}>For hospitals</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Employee Healthcare Plans</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Corporate Wellness Programs</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Partnership Opportunities</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Hospitals & Clinics Integration</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Telemedicine Solutions</a></li>
          </ul>
        </div>

        {/* Who We Are Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
          <h4 style={{ color: "#27c7b8", fontSize: "1.4rem", marginBottom: "15px" }}>Who We Are</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Our Company</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Leadership</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Careers</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Industry Events</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Newsroom</a></li>
          </ul>
        </div>

        {/* Helpful Links Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "30px" }}>
          <h4 style={{ color: "#27c7b8", fontSize: "1.4rem", marginBottom: "15px" }}>Helpful Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Contact Us</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Blog</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>FAQs</a></li>
            <li><a href="me.com" style={{ color: "#dfe4e5", textDecoration: "none" }}>Privacy & Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ borderTop: "1px solid #27c7b8", padding: "20px 0", textAlign: "center" }}>
        <p>© 2024 MedHub Telehealth, Ltd. All rights reserved.</p>
        <p>PL015954.A</p>
        <div>
          <a href="me.com" style={{ color: "#dfe4e5", marginRight: "10px" }}>Apple App Store</a>
          <a href="me.com" style={{ color: "#dfe4e5" }}>Google Play Store</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
