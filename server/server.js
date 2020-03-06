// import express JS module into app
// and creates its variable.
var express = require("express");
var app = express();

const galleryRoute = require("./routes/api/gallery");
app.use("/api/gallery", galleryRoute);

// Creates a server which runs on port 3000 and
// can be accessed through localhost:3000
app.listen(5000, function() {
  console.log("server running on port 5000");
});

// Function callName() is executed whenever
// url is of the form localhost:3000/name

// save code as start.js
