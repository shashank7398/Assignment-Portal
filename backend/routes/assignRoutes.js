const express = require('express');
const { uploadAssignment, getAssignments, updateAssignmentStatus } = require('../controller/assignmentController');

const router = express.Router();

// No authentication middleware applied
router.post('/upload', uploadAssignment);
router.get('/', getAssignments);
router.post('/:id/accept', updateAssignmentStatus);
router.post('/:id/reject', updateAssignmentStatus);

module.exports = router;
