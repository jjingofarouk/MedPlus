import React, { useState } from "react";
import { Button, Col, Form, Row, Card, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoadingState] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoadingState(true);

    if (email && password) {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Extract data from the response
          const { token, user_type } = data; // Get user_type (the role) from the response

          // Store session information
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user_type", user_type); // Store the user_type

          // Use the onLogin prop to set the role in App.js
          onLogin(user_type); // Pass user_type to App.js to update the role

          // Redirect based on the user_type (role) to the appropriate dashboard
          navigate(`/${user_type}-dashboard`); // Direct the user to the corresponding dashboard
        } else {
          alert(data.message || "Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setLoadingState(false); // Stop loading spinner
      }
    } else {
      alert("Email and password are required.");
      setLoadingState(false); // Ensure loading is reset
    }
  };

  return (
    <Card bg="light" text="dark" className="shadow">
      <Card.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="email"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter your password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="submitLoginButton">
            <Col sm={{ span: 9, offset: 3 }}>
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
              </Button>
            </Col>
          </Form.Group>
        </Form>

        <div className="signup-link text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
