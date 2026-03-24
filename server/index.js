const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running. Try GET /api/hello");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend " });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});