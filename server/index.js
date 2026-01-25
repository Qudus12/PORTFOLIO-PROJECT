const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Supabase (Backend side)
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

// Check if keys are present (for debugging purposes)
if (!supabaseUrl || !supabaseKey) {
    console.warn('Warning: Missing Supabase credentials in .env file.');
}

const supabase = (supabaseUrl && supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : null;

// API Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!supabase) {
        return res.status(500).json({ error: 'Database not connected (missing credentials).' });
    }

    try {
        const { data, error } = await supabase
            .from('contacts')
            .insert([{ name, email, message }])
            .select();

        if (error) throw error;

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: error.message || 'Failed to send message.' });
    }
});

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please kill the process running on this port.`);
    } else {
        console.error('Server error:', e);
    }
});
