import StocktwitsClient from "../api_clients/stocktwitsClient";

describe("StockTwits API Client", () => {
    it("searchSymbols: Should GET something if a search key provided", async () => {
        const client = new StocktwitsClient();
        const response = {
            response: { status: 200 },
            results: [{ type: "symbol", id: 686, title: "Apple Inc.", symbol: "AAPL", exchange: "NASDAQ" }],
        };
        client.searchSymbol = jest.fn().mockResolvedValue(response);
        const result = await client.searchSymbol("AAPL");
        expect(result).toEqual(response);
    });

    it("searchSymbols: Should not GET anything if search key not provided", async () => {
        const client = new StocktwitsClient();
        const response = { response: { status: 200 }, results: null };
        client.searchSymbol = jest.fn().mockResolvedValue(response);
        const result = await client.searchSymbol("");
        expect(result).toEqual(response);
    });

    it("getTweetsBySymbolId: Should GET something if a symbol id provided", async () => {
        const client = new StocktwitsClient();
        const response = {
            response: { status: 200 },
            symbol: {
                id: 686,
                symbol: "AAPL",
                title: "Apple Inc.",
                aliases: [],
                is_following: false,
                watchlist_count: 391354,
            },
            cursor: { more: true, since: 212390025, max: 212384505 },
            messages: [
                {
                    id: 212390025,
                    body:
                        "$AAPL so this weeks 320C&#39;s i thought were crazy but they worked..fast forward i thought todays 300P&#39;s were nuts..Moral of the story crazy repeat appl flow works",
                    created_at: "2020-05-13T17:44:32Z",
                    user: [Object],
                    source: [Object],
                    symbols: [Array],
                    likes: [Object],
                    mentioned_users: [],
                    entities: [Object],
                    filters: [Object],
                },
            ],
        };
        client.getTweetsBySymbolId = jest.fn().mockResolvedValue(response);
        const result = await client.getTweetsBySymbolId(686);
        expect(result).toEqual(response);
    });

    it("getTweetsBySymbolId: Should GET 404 if search key not found", async () => {
        const client = new StocktwitsClient();
        const error = new Error("Request failed with status code 404");
        client.getTweetsBySymbolId = jest.fn().mockRejectedValue(error);
        const result = client.getTweetsBySymbolId(11111111);
        expect(result).rejects.toThrowError(error);
    });
});
