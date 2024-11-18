import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from 'H:/Med/medhub/src/components/landingpage/Nav';  // Assuming Nav is your navigation component
import { useUser } from 'H:/Med/medhub/src/components/ui/UserContext.js';  // Import the UserContext


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setuser_type] = useState('patient'); // Default user type
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { updateUserRole } = useUser(); // Get the updateUserRole function from context

    // Form validation for email and password
    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address.');
            return false;
        }
        if (password.length < 6) {
            setMessage('Password must be at least 6 characters long.');
            return false;
        }
        return true;
    };

    // Submit handler for the login form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');  // Reset any previous messages
        setLoading(true); // Show loading indicator

        if (!validateForm()) {
            setLoading(false); // Stop loading if form is invalid
            return;
        }

        try {
            // Make POST request to login endpoint
            const response = await axios.post('http://localhost:3000/login', { email, password, user_type });

            // If successful, store the JWT token in localStorage and update user role
            localStorage.setItem('token', response.data.token);
            updateUserRole(user_type); // Update the user role in context

            // Navigate based on user type
            if (user_type === 'patient') {
                navigate('/patient-dashboard'); // Redirect patients
            } else if (user_type === 'doctor') {
                navigate('/doctor-dashboard'); // Redirect doctors
            } else if (user_type === 'hospital') {
                navigate('/hospital-dashboard'); // Redirect hospitals
            } else {
                navigate('/dashboard'); // Fallback for other user types
            }

        } catch (error) {
            // Handle errors from the API
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Login failed.'); // Display error message from server
            } else {
                setMessage('An error occurred. Please try again.'); // Generic error message
            }
        } finally {
            setLoading(false); // Stop loading indicator after request completes
        }
    };

    return (
        <div className="login-container">
            <Nav />  {/* Navigation component */}
            <h2>Log In</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="user_type">User Type:</label>
                    <select
                        id="user_type"
                        value={user_type}
                        onChange={(e) => setuser_type(e.target.value)}
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">doctor</option>
                        <option value="hospital">hospital</option>
                    </select>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Logging In...' : 'Log In'}
                </button>
            </form>

            {message && <p aria-live="assertive">{message}</p>}  {/* Show messages */}
        </div>
    );
};

export default Login;