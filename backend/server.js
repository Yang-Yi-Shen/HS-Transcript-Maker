const express = require("express");
const path = require('path');

const PORT = 6900
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Welcome to the backend <br> <a href='/about'>About page</a>");
});

app.get("/about", (req, res) => {
    res.send("I am very handsome and smart <br> <a href='/'>Back to home</a>")
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

// Export the Express API
module.exports = app;