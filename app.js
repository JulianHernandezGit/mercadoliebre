const express = require("express");
const { dirname } = require("path");

const app = express();

const path = require("path");

const pathStatic = path.resolve(__dirname + "/public");

app.use(express.static(pathStatic)); 

app.listen(process.env.PORT || 5000);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});