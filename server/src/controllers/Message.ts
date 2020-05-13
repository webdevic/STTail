const url = require("url");
import StocktwitsClient from "../lib/api_clients/stocktwitsClient";

export default class MessageController {
    private stocktwitsClient: StocktwitsClient;
    constructor(stocktwitsClient = new StocktwitsClient()) {
        this.stocktwitsClient = stocktwitsClient;
    }
    public async findBySymbolId(req: any, res: any): Promise<void> {
        try {
            const id: number = req.params.symbolId;
            res.status(200).json(await this.stocktwitsClient.getTweetsBySymbolId(id));
        } catch (e) {
            res.status(e.status || 500).json(e);
        }
    }
}
