const https = require('https');

https.get('http://localhost:8080/', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data)
    });
})
.on('error', (error) => {
    console.log(error)
});