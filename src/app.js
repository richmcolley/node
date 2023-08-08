const express = require('express');
const config = require('../config/config');
const combinedRoutes = require('./routes/combinedRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', combinedRoutes);

// Start server
const PORT = config.server.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
