const express = require("express");
const { dirname } = require("path");

const app = express();

const path = require("path");

const pathStatic = path.resolve(__dirname + "/public");

app.use(express.static(pathStatic)); 

app.listen(3000, () => {
    console.log("Mercadoliebre está corriendo");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});