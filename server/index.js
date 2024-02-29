const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());
const port = 4500 || process.env.PORT;
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Server is runnig");
  //   console.log("Server is running");
});
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`User Connected : ${socket.id}`);

  socket.on("send-message", (message) => {
    console.log(message);
    io.emit("received-message", message);
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected }`);
  });
});

server.listen(port, () => {
  console.log(`Server is running at https://localhost:${port} `);
});
