import React, { useState } from "react";
import axios from "axios";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { username, password });
      localStorage.setItem("token", response.data.token);
      alert("User logged in");
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default UserLogin;
