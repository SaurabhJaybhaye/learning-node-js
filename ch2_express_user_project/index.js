const express = require("express");
const app = express();
const PORT = 8000;
const data = require("./MOCK_DATA.json");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "MOCK_DATA.json");

app.get("/users", (req, res) => {
  res.json(data);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((items) => items.id === id);
  res.json(user);
});

app.post("/users", express.json(), (req, res) => {
  const newUser = req.body;
  const id = data.length + 1;
  data.push({ ...newUser, id });
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.error("Error writing to file", err);
    }
  });
  res.status(201).json({ ...newUser, id });
});

app.put("/users/:id", express.json(), (req, res) => {
  const newUser = req.body;
  const id = Number(req.params.id);
  const userIndex = data.findIndex((items) => items.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  data[userIndex] = { ...data[userIndex], ...newUser };
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
