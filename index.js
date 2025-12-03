// index.js
const express = require('express');
const axios = require('axios');
require('dotenv').config(); // טוען משתני סביבה מקובץ .env

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint שמחזיר את רשימת השירותים בחשבון Render שלך
app.get('/services', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                Authorization: `Bearer ${process.env.RENDER_API_KEY}`
            }
        });

        res.json(response.data); // מחזיר JSON עם השירותים
    } catch (error) {
        console.error('Error fetching services:', error.message);
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
