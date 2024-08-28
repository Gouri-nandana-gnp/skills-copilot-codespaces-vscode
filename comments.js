// Create web server
const express = require("express");
const app = express();
const PORT = 3000;

// Create static files
app.use(express.static("public"));

// Create the comment list
const comments = [
  { username: "Tam", comment: "I'm Tam" },
  { username: "Tom", comment: "I'm Tom" },
  { username: "Tim", comment: "I'm Tim" },
];

// Create the route
app.get("/comments", (req, res) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});