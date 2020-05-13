import WebServer from "./lib/WebServer";

const server = new WebServer({
    port: 3000,
    corsOptions: {},
});

server.start();

module.exports = server;
