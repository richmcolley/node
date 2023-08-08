const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
const mysql = require('mysql');
const config = require('../../config/config');




router.get('/combinedData', async (req, res) => {
    try {
        // Create sample data
        const mongoData = [
            { _id: 1, name: '', email: 'user1@example.com' },
            { _id: 2, name: 'User 2' },
        ];

        const mysqlData = [
            { id: 1, username: 'john_doe', age: 30 },
            { id: 2, username: 'jane_smith', age: 25 },
        ];

        // Combine sample data
        const combinedData = {
            mongoData,
            mysqlData,
        };

        // Send combined data in the response
        res.json(combinedData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

module.exports = router;
