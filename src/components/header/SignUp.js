import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Button, Form, Spinner } from 'react-bootstrap'; // Import necessary Bootstrap components
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUserType] = useState('patient'); // Default to 'patient'
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Password validation logic
    const validatePassword = (password) => {
        const minLength = 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        return (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasNumber &&
            hasSpecialChar
        );
    };

    // Form validation logic
    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.'); // Using alert instead of toast
            return false;
        }
        if (!validatePassword(password)) {
            alert('Password must be at least 6 characters long, with an uppercase letter, a lowercase letter, a number, and a special character.'); // Using alert instead of toast
            return false;
        }
        if (!name.trim()) {
            alert('Please enter your name.'); // Using alert instead of toast
            return false;
        }
        return true;
    };

    // Form submission logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            const url = 'http://localhost:3000/signup';
            const response = await axios.post(url, { email, password, user_type, name });

            // Handle response and store user data
            localStorage.setItem('user', JSON.stringify(response.data));

            alert('Signup successful!'); // Using alert instead of toast

            // Navigate to dashboard based on user type
            navigate(`/${user_type}-dashboard`);

        } catch (error) {
            console.error('Signup error:', error);
            alert(error.response ? error.response.data.message : 'An error occurred during signup.'); // Using alert instead of toast
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="user_type">
                    <Form.Label>Register as:</Form.Label>
                    <Form.Select
                        value={user_type}
                        onChange={(e) => setUserType(e.target.value)}
                        required
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="hospital">Hospital</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : 'Sign Up'}
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;
