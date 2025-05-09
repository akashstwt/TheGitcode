require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const developerRoutes = require('./routes/developers');
const repoRoutes = require('./routes/repos');
const applicationRoutes = require('./routes/applications');

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/developers', developerRoutes);
app.use('/repos', repoRoutes);
app.use('/applications', applicationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
