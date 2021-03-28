// Import dependencies
const express = require("express");
const app = express();
require("dotenv").config();

// Allow parsing on request bodies
app.use(express.json());

// Import routes for API

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening on port ", port);
  console.log("Hey Wiki!");
});
