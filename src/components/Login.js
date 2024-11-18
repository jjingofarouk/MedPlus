import React, { useState } from "react";
import { useDispatch } from "react-redux"; 
import { Button, Col, Form, Row, Card, Spinner, Modal } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify"; 
import { login, setError } from "./authSlice"; // Import actions from authSlice

const LoginForm = ({ showModal, handleClose }) => { // Accept props for modal control
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 

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
          dispatch(login({ token: data.token, user_type: data.user_type }));
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("user_type", data.user_type); 

          toast.success("Login successful!");
          navigate("/dashboard"); 
          handleClose(); // Close modal on success
        } else {
          dispatch(setError(data.message || "Login failed. Please try again.")); 
          toast.error(data.message || "Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Login failed:", error);
        dispatch(setError("An error occurred. Please try again.")); 
        toast.error("An error occurred. Please try again.");
      } finally {
        setLoading(false); 
      }
    } else {
      dispatch(setError("Email and password are required.")); 
      toast.error("Email and password are required.");
      setLoading(false); 
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                  <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
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
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
