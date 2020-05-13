import StocktwitsClient, { ISymbol } from "../api_clients/stocktwitsClient";

export default class SymbolService {
    private client: StocktwitsClient;
    constructor(client = new StocktwitsClient()) {
        this.client = client;
    }

    public async search(keys: string[]): Promise<ISymbol[]> {
        const result: ISymbol[] = [];
        const searchResponseArray = await Promise.all(keys.map((key) => this.searchSymbol(key)));
        return result.concat(...searchResponseArray);
    }

    private async searchSymbol(key: string): Promise<ISymbol[]> {
        const searchResponse = await this.client.searchSymbol(key.toUpperCase());
        return searchResponse.results;
    }
}
