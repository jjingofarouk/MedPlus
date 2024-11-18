import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Toast from "react-bootstrap/Toast";
import { Outlet } from "react-router-dom";
import { RiRobot2Fill, RiLogoutCircleRLine, RiLoginCircleLine, RiUser3Line } from "react-icons/ri";
import "./Header.css";
import roleBasedNavItems  from './RoleBasedNavItems';

const publicNavItems = [
  {
    title: "QuickCare",
    icon: <RiRobot2Fill size="2em" />,
    items: [
      { href: "/emergency", label: "Emergencies" },
      { href: "/hospitals", label: "Find Hospitals" },
      { href: "/doctors", label: "Find Doctors" },
      { href: "/pharmacies", label: "Find Pharmacies" },

    ],
  },
];

function Header() {
  const [showToast, setShowToast] = useState(false);
  // Fetch the authentication status and role from local storage
  const isAuthenticated = !!localStorage.getItem("userRole");
  const role = localStorage.getItem("userRole"); // Get role from local storage

  const handleLogout = () => {
    localStorage.removeItem("userRole"); // Clear user role from local storage
    setShowToast(true);
  };

  const renderNavItems = (items) => {
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
        {item.items.map((subItem, subIndex) => (
          <NavDropdown.Item key={subIndex} href={subItem.href}>
            {subItem.label}
          </NavDropdown.Item>
        ))}
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
              <Navbar.Brand href="/">
                <img
                  src="../images/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-self-center"
                  alt="Endosoft logo"
                />
              </Navbar.Brand>

              {renderNavItems(publicNavItems)}

              {isAuthenticated ? (
                <>
                  {renderNavItems(roleBasedNavItems[role] || [])}
                  <Nav.Link onClick={handleLogout}>
                    <RiLogoutCircleRLine size="2em" /> Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">
                    <RiLoginCircleLine size="2em" /> Login
                  </Nav.Link>
                  <Nav.Link href="/signup">
                    <RiUser3Line size="2em" /> Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Toast for Logout Confirmation */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Body>You have successfully logged out!</Toast.Body>
      </Toast>

      <Outlet />
    </>
  );
}

export default Header;