module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("Usuário conectado:", socket.id);

        socket.on("disconnect", () => {
            console.log("Desconectado:", socket.id);
        });

        socket.on("msg", (data) => {
            io.emit("showMsg", data);
        });
    });
};
