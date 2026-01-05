const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! This is Dr. Guercio’s Web Programming II app – Version 2 🚀 and now version 3");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
