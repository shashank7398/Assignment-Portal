const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/assignments', require('./routes/assignRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
