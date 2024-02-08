
// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3000;

// // Middleware to parse JSON requests
// app.use(express.json());

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'dchatcare@gmail.com', // Your Gmail email address
//         pass: pibubdtsbaonaxep // obtain only this as avariable from fetch api

//     }
// });

// // POST endpoint to receive data and send email
// app.post('/send-email', (req, res) => {
//     const { recipientEmail, subject, text,gmailPassword } = req.body;

//     // Check if required fields are present
//     if (!recipientEmail || !subject || !text) {
//         return res.status(400).send('Missing required fields');
//     }

//     const mailOptions = {
//         from: 'dchatcare@gmail.com', // Your Gmail email address
//         to: recipientEmail,
//         subject: subject,
//         text: text
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             return res.status(500).send('Email sending failed');
//         } else {
//             console.log('Email sent: ' + info.response);
//             return res.send('Email sent successfully');
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

let gmailPassword = ''; // Initialize Gmail password variable

// POST endpoint to send email and receive Gmail password
app.post('/send-email', (req, res) => {
    const { recipientEmail, subject, text, password } = req.body;

    // Check if required fields are present
    if (!recipientEmail || !subject || !text || !password) {
        return res.status(400).send('Missing required fields');
    }

    // Update the Gmail password
    gmailPassword = password;

    // Nodemailer transporter setup using the received password
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dchatcare@gmail.com', // Your Gmail email address
            pass: gmailPassword // Gmail password obtained from the fetch API
        }
    });

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
