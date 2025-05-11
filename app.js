const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

//-----//
const booksRoutes = require('./routes/books');
app.use(booksRoutes)



//-----//
console.log("Server is up and running on http://localhost:3500 ");
app.listen(3500);  