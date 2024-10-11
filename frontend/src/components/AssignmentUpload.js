import React, { useState } from "react";
import axios from "axios";

const AssignmentUpload = () => {
  const [task, setTask] = useState("");
  const [admin, setAdmin] = useState("");

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/api/upload",
        { task, admin },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Assignment uploaded");
    } catch (error) {
      alert("Error uploading assignment");
    }
  };

  return (
    <div>
      <h2>Upload Assignment</h2>
      <input
        type="text"
        placeholder="Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Admin"
        onChange={(e) => setAdmin(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default AssignmentUpload;
