import WebServer from "./lib/webServer";

const whitelist = ["http://localhost:3001"];
const server = new WebServer({
    corsOptions: {
        origin: (origin: string | undefined, callback: Function) => {
            if (origin && whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    },
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    version: "/api/v1/",
});

server.start();

module.exports = server;
