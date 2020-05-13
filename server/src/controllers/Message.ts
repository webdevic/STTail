import MessageService from "../lib/services/message";

export default class MessageController {
    private service: MessageService;
    constructor(service = new MessageService()) {
        this.service = service;
    }
    public async findBySymbolId(req: any, res: any): Promise<void> {
        try {
            const id: number = req.params.symbolId;
            res.status(200).json(await this.service.getTweetsBySymbolId(id));
        } catch (e) {
            res.status(e.status || 500).json(e);
        }
    }
}
