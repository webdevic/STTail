import { Router, Request, Response } from "express";
import SymbolController from "../controllers/Symbol";
import MessageController from "../controllers/Message";

export const routers = (controllers: { symbol: SymbolController; message: MessageController }): Router => {
    const router = Router();
    // Symbol Routes
    router.get("/symbol/search", (req: Request, res: Response) => controllers.symbol.search(req, res));
    router.get("/message/:symbolId", (req: Request, res: Response) => controllers.message.findBySymbolId(req, res));
    return router;
};
