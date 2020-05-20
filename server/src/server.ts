import WebServer from "./WebServer";
require("dotenv").config();

const whitelist = (process.env.CORS_ALLOWED_HOSTS || "").split(",");
const server = new WebServer({
    corsOptions: {
        origin: (origin: string | undefined, callback: Function) => {
            if (origin && whitelist.indexOf(origin) === -1) {
                callback(new Error(`Origin: ${origin} is not allowed by CORS`));
            } else {
                callback(null, true);
            }
        },
    },
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    version: "/api/v1/",
});

server.start();

module.exports = server;
