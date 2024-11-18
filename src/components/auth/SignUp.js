import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setuser_type] = useState('patient'); // Tracks user_type
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [uniqueId, setUniqueId] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate hook

    const validatePassword = (password) => {
        const minLength = 8;
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

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address.');
            return false;
        }
        if (!validatePassword(password)) {
            setMessage('Password must be at least 8 characters long, with an uppercase letter, a lowercase letter, a number, and a special character.');
            return false;
        }
        if (!name.trim()) {
            setMessage('Please enter your name.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            const url = `http://localhost:3000/signup`;
            const response = await axios.post(url, { email, password, user_type, name });
            setMessage(`Success! A verification code has been sent to ${response.data.email}. Please enter the code below.`);
            setIsSignedUp(true); // Allow user to enter verification code
            setUniqueId(response.data.userId); // Set the unique ID upon successful registration
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || 'Operation failed.');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyCode = async () => {
        setLoading(true);
        try {
            const url = `http://localhost:3000/verify-code`;
            const response = await axios.post(url, { email, code: verificationCode });
            setMessage(response.data.message);
            setIsVerified(true);

            // Redirect based on user_type
            if (user_type === 'patient') {
                navigate('/patient-dashboard'); // Redirect to patient dashboard
            } else if (user_type === 'doctor') {
                navigate('/doctor-dashboard'); // Redirect to doctor dashboard
            } else if (user_type === 'hospital') {
                navigate('/hospital-dashboard'); // Redirect to hospital dashboard
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || 'Failed to verify code.');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleResendVerification = async () => {
        try {
            const url = `http://localhost:3000/resend-verification`;
            const response = await axios.post(url, { email });
            setMessage(`Verification email has been resent to ${response.data.email}.`);
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || 'Failed to resend verification email.');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="signup-container">
            <h2>{isSignedUp ? 'Enter Verification Code' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                    <label htmlFor="user_type">Register as:</label>
                    <select
                        id="user_type"
                        value={user_type}
                        onChange={(e) => setuser_type(e.target.value)}
                        required
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">doctor</option>
                        <option value="hospital">hospital</option>
                    </select>
                </div>
                <button type="submit" disabled={loading || isSignedUp}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>

            {isSignedUp && !isVerified && (
                <div>
                    <h3>Verify Your Email</h3>
                    <p>Enter the verification code sent to your email:</p>
                    <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="Enter verification code"
                    />
                    <button onClick={handleVerifyCode} disabled={loading || isVerified}>
                        {loading ? 'Verifying...' : 'Verify Code'}
                    </button>
                    <button onClick={handleResendVerification}>Resend Verification Email</button>
                </div>
            )}

            {message && <p aria-live="assertive">{message}</p>}
            {isSignedUp && uniqueId && <p>Your unique ID: {uniqueId}</p>}

            <button onClick={() => setIsSignedUp(false)}>
                Already have an account? Log In
            </button>
        </div>
    );
};

export default SignUp;
