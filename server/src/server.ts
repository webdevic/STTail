import WebServer from "./lib/webServer";
require("dotenv").config();

const whitelist = (process.env.CORS_ALLOWED_HOSTS || "").split(",");
console.info({ whitelist });
const server = new WebServer({
    corsOptions: {
        origin: (origin: string | undefined, callback: Function) => {
            if (origin && whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error(`Origin: ${origin} is not allowed by CORS`));
            }
        },
    },
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    version: "/api/v1/",
});

server.start();

module.exports = server;
