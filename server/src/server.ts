import WebServer from "./lib/webServer";

const server = new WebServer({
    port: 3000,
    corsOptions: {},
});

server.start();

module.exports = server;
