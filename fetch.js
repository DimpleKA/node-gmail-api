// Define the data to be sent in the request body
const postData = {
    recipientEmail: 'vatsalrishabh00@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email message.'
};

// Define the URL of your Express server's /send-email endpoint
const url = 'http://localhost:3000/send-email';

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
