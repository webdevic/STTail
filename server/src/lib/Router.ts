import { Router, Request, Response } from "express";
import SymbolController from "../controllers/Symbol";
import MessageController from "../controllers/Message";
import path from "path";

export const routers = (controllers: { symbol: SymbolController; message: MessageController }): Router => {
    const router = Router();
    // UI Routes
    router.get("/", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, "build", "index.html"));
    });
    // Symbol Routes
    router.get("/symbol/search", (req: Request, res: Response) => controllers.symbol.search(req, res));
    // Message Routes
    router.get("/message/:symbolId", (req: Request, res: Response) => controllers.message.findBySymbolId(req, res));
    return router;
};
