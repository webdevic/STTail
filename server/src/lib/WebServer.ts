import bodyParser from "body-parser";
import compression from "compression";
import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import http, { Server } from "http";
import { routers } from "./router";
import StocktwitsClient from "./api_clients/stocktwitsClient";
import SymbolController from "../controllers/symbol";
import MessageController from "../controllers/message";

export interface IServerConfig {
    corsOptions: CorsOptions;
    port: number;
}

export default class WebServer {
    public app: Application;
    private config: IServerConfig;
    private server: Server;

    constructor(config: IServerConfig) {
        this.config = config;
        this.app = this.createApp();
        this.server = http.createServer(this.app);
    }

    public start(): void {
        this.server.listen(this.config.port, () => {
            console.info(`Listening on port ${this.config.port}`);
        });
    }

    public stop(): void {
        this.server.close();
    }

    private createApp(): Application {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(
            "/api/v1/",
            routers({
                symbol: new SymbolController(),
                message: new MessageController(),
            })
        );
        app.get("/", (req, res) => res.send("Hello ME!"));
        return app;
    }
}
