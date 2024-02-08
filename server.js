
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dchatcare@gmail.com', // Your Gmail email address
        pass: 'pibubdtsbaonaxep' // Your Gmail password or App Password
    }
});

// POST endpoint to receive data and send email
app.post('/send-email', (req, res) => {
    const { recipientEmail, subject, text } = req.body;

    // Check if required fields are present
    if (!recipientEmail || !subject || !text) {
        return res.status(400).send('Missing required fields');
    }

    const mailOptions = {
        from: 'dchatcare@gmail.com', // Your Gmail email address
        to: recipientEmail,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Email sending failed');
        } else {
            console.log('Email sent: ' + info.response);
            return res.send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
