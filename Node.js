const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.static('.'));

app.get('/track/:ip', async (req, res) => {
    const ip = req.params.ip;
    const apiKey = 'YOUR_IP_API_KEY'; // Get one from ip-api.com
    const response = await fetch(`http://ip-api.com/json/${ip}?key=${apiKey}`);
    const data = await response.json();
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
