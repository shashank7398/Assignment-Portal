const Assignment = require('../models/Assignment');

// Upload Assignments
const uploadAssignment = async (req, res) => {
    const { task, adminId } = req.body;

    try {
        const assignment = new Assignment({
            userId: null,
            // Since there is no user authentication, you can set userId to a default or omit it
            task,
            admin: adminId
        });

        await assignment.save();
        res.status(201).json({ message: 'Assignment uploaded successfully' });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get Assignments
const getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find(); // Fetch all assignments
        res.json(assignments); // Send assignments as a response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// Update Assignment Status
const updateAssignmentStatus = async (req, res) => {
    const { id } = req.params;  // Get assignment ID from params

    // Determine the status based on the URL endpoint
    const status = req.url.includes('accept') ? 'Accepted' : 'Rejected';

    try {
        // Find the assignment by ID and update its status
        const assignment = await Assignment.findByIdAndUpdate(
            id, 
            { status },  // Update status based on URL
            { new: true }  // Return the updated document
        );

        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        res.json({ message: 'Assignment status updated successfully', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = { uploadAssignment, getAssignments, updateAssignmentStatus };
