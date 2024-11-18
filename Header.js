import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import { Outlet } from "react-router-dom";
import {
  RiLoginCircleLine,
  RiLogoutCircleRLine,
  RiCalendarLine,
  RiUser3Line,
  RiDashboard3Line,
  RiStethoscopeLine,
} from "react-icons/ri";
import LoginForm from "../login/LoginForm";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import SignUp from '../SignUp';
import { logout } from "./logout";
import permissions, { hasPermission } from './permissions';


const roleBasedNavItems = {
  patient: [
    {
      title: "Consultations",
      icon: <RiStethoscopeLine size="2em" />,
      items: [
        { href: "consultations", label: "Consultations", permissions: [permissions.VIEW_RECORDS] }, // Feature 1 for Patients
      ],
    },
    {
      title: "Health Monitoring",
      icon: <RiDashboard3Line size="2em" />,
      items: [
        { href: "monitoring", label: "Health Tracker", permissions: [permissions.VIEW_RECORDS] }, // Feature 2 for Patients
        { href: "medications", label: "Medication Adherence Tracker", permissions: [permissions.VIEW_MEDICATIONS] }, // Feature 8 for Patients
      ],
    },
    {
      title: "Records & Tests",
      icon: <RiUser3Line size="2em" />,
      items: [
        { href: "records", label: "Medical Records", permissions: [permissions.VIEW_RECORDS] }, // Feature 3 for Patients
        { href: "symptom-checker", label: "AI-Based Symptom Checker", permissions: [permissions.VIEW_RECORDS] }, // Feature 4 for Patients
        { href: "lab-results", label: "Lab Results Interpretation", permissions: [permissions.VIEW_LAB_RESULTS] }, // Feature 5 for Patients
        { href: "refills", label: "Prescription Refills", permissions: [permissions.EDIT_MEDICATIONS] }, // Feature 6 for Patients
        { href: "remote-testing", label: "Remote Diagnostic Testing", permissions: [permissions.VIEW_RECORDS] }, // Feature 7 for Patients
      ],
    },
    {
      title: "Appointments",
      icon: <RiCalendarLine size="2em" />,
      items: [
        { href: "appointment-history", label: "Appointment History", permissions: [permissions.VIEW_APPOINTMENTS] }, // Feature 9 for Patients
        { href: "recommendations", label: "Recommendations", permissions: [permissions.VIEW_APPOINTMENTS] }, // Feature 9 for Patients
      ],
    },
    {
      title: "Explore",
      icon: <RiDashboard3Line size="2em" />,
      items: [
        { href: "explore", label: "Health Education", permissions: [permissions.ACCESS_EDUCATIONAL_MATERIALS] }, // Feature 10 for Patients
      ],
    },
  ],

  doctor: [
    {
      title: "Teleconsultations",
      icon: <RiStethoscopeLine size="2em" />,
      items: [
        { href: "consultations", label: "Teleconsultation", permissions: [permissions.VIEW_RECORDS, permissions.VIEW_APPOINTMENTS] }, // Feature 1 for Doctors
      ],
    },
    {
      title: "Decision Support",
      icon: <RiDashboard3Line size="2em" />,
      items: [
        { href: "decision-support", label: "Decision Support", permissions: [permissions.VIEW_RECORDS] }, // Feature 2 for Doctors
        { href: "patient-alerts", label: "Patient Alerts", permissions: [permissions.VIEW_RECORDS] }, // Feature 5 for Doctors
      ],
    },
    {
      title: "Clinical Management",
      icon: <RiUser3Line size="2em" />,
      items: [
        { href: "documentation", label: "Documentation", permissions: [permissions.EDIT_RECORDS] }, // Feature 3 for Doctors
        { href: "analytics", label: "Patient Analytics", permissions: [permissions.VIEW_ANALYTICS] }, // Feature 4 for Doctors
        { href: "population-health", label: "Population Health Management", permissions: [permissions.VIEW_ANALYTICS] }, // Feature 6 for Doctors
      ],
    },
    {
      title: "Collaboration",
      icon: <RiCalendarLine size="2em" />,
      items: [
        { href: "care-tools", label: "Collaborative Care", permissions: [permissions.VIEW_RECORDS] }, // Feature 7 for Doctors
        { href: "referrals", label: "Referrals", permissions: [permissions.REQUEST_REFERRALS] }, // Feature 8 for Doctors
      ],
    },
    {
      title: "Automation",
      icon: <RiDashboard3Line size="2em" />,
      items: [
        { href: "care-pathways", label: "Automatic Care", permissions: [permissions.VIEW_RECORDS] }, // Feature 9 for Doctors
        { href: "billing", label: "Billing", permissions: [permissions.VIEW_BILLING_INFO] }, // Feature 10 for Doctors
      ],
    },
  ],

  hospital: [
    {
      title: "Bed Management",
      icon: <RiCalendarLine size="2em" />,
      items: [
        { href: "bed-management", label: "Bed Management", permissions: [permissions.VIEW_RECORDS] }, // Feature 1 for Hospitals
      ],
    },
    {
      title: "Care Coordination",
      icon: <RiDashboard3Line size="2em" />,
      items: [
        { href: "care-coordination", label: "Care Coordination", permissions: [permissions.VIEW_RECORDS] }, // Feature 2 for Hospitals
        { href: "patient-flow", label: "Patient Flow", permissions: [permissions.VIEW_RECORDS] }, // Feature 3 for Hospitals
      ],
    },
    {
      title: "Clinical Tracking",
      icon: <RiUser3Line size="2em" />,
      items: [
        { href: "outcomes-tracking", label: "Clinical Outcomes Tracker", permissions: [permissions.VIEW_RECORDS] }, // Feature 4 for Hospitals
        { href: "infection-monitoring", label: "Infection Monitor", permissions: [permissions.VIEW_RECORDS] }, // Feature 5 for Hospitals
      ],
    },
    {
      title: "Resource & Compliance",
      icon: <RiCalendarLine size="2em" />,
      items: [
        { href: "resource-allocation", label: "Resource Allocation", permissions: [permissions.VIEW_ANALYTICS] }, // Feature 6 for Hospitals
        { href: "reporting", label: "Reporting & Compliance", permissions: [permissions.ACCESS_COMPLIANCE_REPORTS] }, // Feature 7 for Hospitals
      ],
    },
    {
      title: "Post-Discharge",
      icon: <RiDashboard3Line size="2em" />,
      items: [
        { href: "inpatient-followup", label: "Follow-up", permissions: [permissions.VIEW_RECORDS] }, // Feature 9 for Hospitals
        { href: "research-integration", label: "Research", permissions: [permissions.VIEW_RECORDS] }, // Feature 10 for Hospitals
      ],
    },
  ],
};


function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const profileJSON = localStorage.getItem("profile");
  const profile = JSON.parse(profileJSON);
  const role = profile ? profile.role : null;
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const handleLogout = () => {
    setShowLogin(true);
    setShowToast(true);
  };

  const renderNavItems = () => {
    const items = roleBasedNavItems[role] || [];
    return items.map((item, index) => (
      <NavDropdown
        key={index}
        title={
          <>
            {item.icon} {item.title}
          </>
        }
        id={`nav-dropdown-${item.title.toLowerCase()}`}
      >
        {item.items.map((subItem, subIndex) => {
          // Check permission before rendering
          if (hasPermission(profile.permissions, subItem.permissions[0])) {
            return (
              <NavDropdown.Item key={subIndex} href={subItem.href}>
                {subItem.label}
              </NavDropdown.Item>
            );
          }
          return null; // Don't render if permission is not granted
        })}
      </NavDropdown>
    ));
  };

  
  return (
    <>
      <Navbar expand="lg" bg="dark" className="bg-body-tertiary m-1">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-center">
              <Navbar.Brand href="https://hukumabob.github.io/">
                <img
                  src="../images/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-self-center"
                  alt="Endosoft logo"
                />
              </Navbar.Brand>

              <Nav.Link href="dashboard">
                <RiDashboard3Line size="2em" />
                Dashboard
              </Nav.Link>

              {isAuthenticated && renderNavItems()}

              <Nav.Link href="profile">
                <RiUser3Line size="2em" />
                Profile
              </Nav.Link>

              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>
                  <RiLogoutCircleRLine size="2em" />
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link onClick={handleShowLogin}>
                  <RiLoginCircleLine size="2em" />
                  Login
                </Nav.Link>
              )}

              {!isAuthenticated && (
                <Nav.Link onClick={handleShowSignUp}>
                  <RiUser3Line size="2em" />
                  Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm handleCloseLogin={handleCloseLogin} />
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={handleCloseSignUp} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp />
        </Modal.Body>
      </Modal>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        className="toast-align"
      >
        <Toast.Body>You've successfully logged out</Toast.Body>
      </Toast>
      <Outlet />
    </>
  );
}

export default Header;