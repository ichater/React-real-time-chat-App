const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

io.on("connection", (socket) => {
  console.log("we have a new connection!!!");

  socket.on("join", ({ name, room }) => {
    console.log(name, room);
    // const error = true;
    // if (error) {
    //   callback({ error: "error" });
    // }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected :O!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
