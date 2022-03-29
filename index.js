require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const PORT = process.env.PORT;

app.use(express.static("build/web"));
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});