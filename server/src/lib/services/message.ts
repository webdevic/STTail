import StocktwitsClient, { IMessage } from "../api_clients/stocktwitsClient";

export default class MessageService {
    private client: StocktwitsClient;
    constructor(client = new StocktwitsClient()) {
        this.client = client;
    }
    public async getTweetsBySymbolId(symbolId: number): Promise<IMessage[]> {
        const getResponse = await this.client.getTweetsBySymbolId(symbolId);
        return getResponse.messages;
    }
}
