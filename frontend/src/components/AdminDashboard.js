import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/admin/assignments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAssignments(response.data);
    };

    fetchAssignments();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `/api/admin/assignments/${id}/${action}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(`Assignment ${action}ed successfully`);
    } catch (error) {
      alert("Error performing action");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <p>{assignment.user}</p>
            <p>{assignment.task}</p>
            <p>{assignment.date}</p>
            <button onClick={() => handleAction(assignment.id, "accept")}>
              Accept
            </button>
            <button onClick={() => handleAction(assignment.id, "reject")}>
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
