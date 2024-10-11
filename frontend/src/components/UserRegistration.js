import React, { useState } from "react";
import axios from "axios";

const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("/api/register", { username, password });
      alert("User registered successfully");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default UserRegistration;
