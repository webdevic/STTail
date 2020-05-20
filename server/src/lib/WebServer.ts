import { routers } from "./Router";
import bodyParser from "body-parser";
import compression from "compression";
import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import http, { Server } from "http";
import MessageController from "../controllers/Message";
import SymbolController from "../controllers/Symbol";
import path from "path";
import helmet from "helmet";

export interface IServerConfig {
    corsOptions: CorsOptions;
    port: number;
    version: string;
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
        app.use(compression());
        app.use(cors(this.config.corsOptions));
        app.use(helmet());
        app.use(express.static(path.join(__dirname, "../../../client/build")));
        app.use(
            this.config.version,
            routers({
                symbol: new SymbolController(),
                message: new MessageController(),
            })
        );
        return app;
    }
}
