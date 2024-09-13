const express = require("express");
const path = require("path");
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());

// Correct static files serving path: serve static files from 'server/public'
app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
  console.log("server running on: ", PORT);
});

module.exports = app;
