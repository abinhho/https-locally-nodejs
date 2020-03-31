const httpsLocalhost = require("https-localhost")()
const express = require('express');
const app = express();
const path = require('path');
const https = require('https');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// Or
// app.use(express.static('public'))

const port = 4443;

httpsLocalhost.getCerts().then(certs => {
    https.createServer(certs, app).listen(port, function(){
        console.log("Server running at https://localhost:" + port)
    })
})
