import React, { useState } from "react";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import { toast } from "react-toastify"; // Import toast for notifications

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState(""); // Change from username to email
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate for redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await fetch("http://localhost:3000/login", { // Ensure this URL matches your backend
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Store token and user_type in local storage
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_type", data.user_type);

          // Notify user and redirect
          toast.success("Login successful!");
          if (onLoginSuccess) onLoginSuccess(data);
          navigate("/dashboard"); // Redirect to dashboard after successful login
        } else {
          toast.error(data.message || "Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Login failed:", error);
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Email and password are required.");
    }
  };

  return (
    <Card bg="dark" data-bs-theme="dark">
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
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="submitLoginButton">
            <Col sm={{ span: 9, offset: 3 }}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>

        <div className="signup-link">
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
