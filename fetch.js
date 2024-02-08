// Define the data to be sent in the request body
const postData = {
    recipientEmail: 'vatsalrishabh00@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email message.',
    password: 'gcrcyxdrpajxmxau' // Add your Gmail password here
};

// Define the URL of your Express server's /send-email endpoint
const url = 'https://node-gmail.onrender.com/send-email';

// Define options for the fetch request
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
};

// Make the POST request using fetch
fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
