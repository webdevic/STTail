const url = require("url");
import StocktwitsClient from "../lib/api_clients/stocktwitsClient";

export default class SymbolController {
    private stocktwitsClient: StocktwitsClient;
    constructor(stocktwitsClient = new StocktwitsClient()) {
        this.stocktwitsClient = stocktwitsClient;
    }
    public async search(req: any, res: any): Promise<void> {
        try {
            const queryObject = url.parse(req.url, true).query;
            const key: string = queryObject.key;
            res.status(200).json(await this.stocktwitsClient.searchSymbol(key));
        } catch (e) {
            res.status(e.status || 500).json(e);
        }
    }
}
