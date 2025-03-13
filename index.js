require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

require("./src/sockets/chatSocket")(io);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

http.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))