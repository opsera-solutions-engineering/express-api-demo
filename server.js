const express = require('express');
const os = require('os');
const app = express();
let currentDate = new Date()
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
let dateString = cMonth + '/' + cDay + '/' + cYear
let host = os.hostname()

app.get('/api/javascript', function(req, res){
   res.json(
       {
           msg: 'Hello World!', 
           language: 'NodeJS', 
           date: dateString,
           hostname: host, 
        });
});

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => console.log(`Server listening: ${HOST}:${PORT}`));