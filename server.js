const express = require("express");
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("server/public"));

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
};
const server = app.listen(PORT, () => {
  console.log("server running on: ", PORT);
});

module.exports = app;
