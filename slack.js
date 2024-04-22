const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(3000);
const io = socketio(expressServer);

const namespaces = require("./data/namespaces");

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");

  socket.emit("Welcome to socket server");

  socket.emit("nsList", namespaces);
});
