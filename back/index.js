const express = require("express");
const app = express();

const port = 4000;
app.get("/", (req, res) => {    
    res.send("Hello World! This is the backend server.");
});
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}!`);
});