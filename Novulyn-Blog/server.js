const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src')));

// Serve index.html as the default file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve blog.html for the blog route
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'blog', 'blog.html'));
});

app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    if (email) {
        const filePath = path.join(__dirname, 'src', 'subscribers.txt');
        fs.appendFile(filePath, `${email}\n`, (err) => {
            if (err) {
                console.error('Failed to save email:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.status(200).send('Subscribed successfully');
        });
    } else {
        res.status(400).send('Email is required');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
