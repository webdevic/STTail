import bodyParser from "body-parser";
import compression from "compression";
import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import http, { Server } from "http";
import { routers } from "./Router";
import StocktwitsClient from "./api_clients/stocktwitsClient";
import SymbolController from "../controllers/Symbol";
import MessageController from "../controllers/Message";

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
        const stocktwitsClient = new StocktwitsClient();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(
            "/api/v1/",
            routers({
                symbol: new SymbolController(stocktwitsClient),
                message: new MessageController(stocktwitsClient),
            })
        );
        app.get("/", (req, res) => res.send("Hello ME!"));
        return app;
    }
}
