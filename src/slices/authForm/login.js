import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Ensure this import is correct

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");  // Hook should be at the top level
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Correctly called at the top level

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });

      // Assuming the response includes a JWT token and user_type
      const { token, user_type } = response.data;

      // Save token in local storage or cookies
      localStorage.setItem("token", token);
      localStorage.setItem("user_type", user_type);

      // Call the success callback
      if (onLoginSuccess) onLoginSuccess(response.data);

      // Redirect to the dashboard based on user type
      navigate(`/${user_type}-dashboard`); // Use navigate for redirection

      toast.success("Login successful!");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
