const express = require('express')
const app = express();
const path = require('path');

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))