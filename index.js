const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const course = process.env.COURSE || "Unknown Course";
  res.send("Hello from ${course}!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
