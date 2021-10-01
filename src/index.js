const express = require("express");
const connection = require("./configs/connection");
const {PORT, URL} = require("./configs/key");

const app = express();

connection(URL);
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
