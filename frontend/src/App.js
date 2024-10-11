import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
import AssignmentUpload from "./components/AssignmentUpload";
import AdminRegistration from "./components/AdminRegistration";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegistration />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/upload" element={<AssignmentUpload />} />
        <Route path="/admin/register" element={<AdminRegistration />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
