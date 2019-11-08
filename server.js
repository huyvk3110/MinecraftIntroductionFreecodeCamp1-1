const express = require('express');
const app = express();

express.static('public');

app.get('/',(req,res)=>{
    res.sendFile('/Users/vankhachuy/Downloads/freecode/public/index.html');
})

app.listen(3001,()=>{
    console.log('Server start')
})