const url = require("url");
import SymbolService from "../lib/services/symbol";

export default class SymbolController {
    private service: SymbolService;
    constructor(service = new SymbolService()) {
        this.service = service;
    }
    public async search(req: any, res: any): Promise<void> {
        try {
            const queryObject = url.parse(req.url, true).query;
            const keys: string[] = queryObject.key.split(",");
            res.status(200).json(await this.service.search(keys));
        } catch (e) {
            res.status(e.status || 500);
        }
    }
}
