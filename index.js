const express = require('express');
const app = new express();
const port = 5000;

app.get("/", (req, res) => {
    return res.send("Hello World");
});

let server = app.listen(port, () => {
    console.log("Listening a http://localhost:"+ port);
})