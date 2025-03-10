import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", { name, email, password });
      setMessage(res.data.message);
      if (res.status === 201) navigate("/Login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container-fluid register-page">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="input" value={name} onChange={(e) => setName(e.target.value)} required /><br/>
          <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
          <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
          <button type="submit">Register</button>
        </form>
        {message && <p>{message}</p>}

        {/* Login link */}
        <p className="login-text">
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
