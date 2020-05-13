import Client from "./client";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ISymbol {
    id: number;
    symbol: string;
    title: string;
    type: string;
}

export interface ISearchSymbolResponse {
    response: {
        status: number;
    };
    results: ISymbol[];
}

export interface IMessage {
    id: number;
    body: string;
    created_at: string;
    user: {
        id: number;
        username: string;
        name: string;
        avatar_url: string;
        avatar_url_ssl: string;
        identity: string;
        classification: string[];
    };
    source: {
        id: number;
        title: string;
        url: string;
    };
    symbols: ISymbol[];
}

export interface ICursor {
    more: boolean;
    since: number;
    max: number;
}

export interface IGetTweetsBySymbolIdResponse {
    response: {
        status: number;
    };
    symbol: ISymbol;
    cursor: ICursor;
    messages: IMessage[];
}

export default class StocktwitsClient extends Client {
    constructor(config?: AxiosRequestConfig) {
        super(config);
        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param,
        }));
        this.api.interceptors.response.use((param: AxiosResponse) => ({
            ...param,
        }));
    }

    public getTweetsBySymbolId(id: number): Promise<IGetTweetsBySymbolIdResponse> {
        return this.get<IGetTweetsBySymbolIdResponse, AxiosResponse<IGetTweetsBySymbolIdResponse>>(
            `https://api.stocktwits.com/api/2/streams/symbol/${id}.json`
        ).then(this.success);
    }

    public searchSymbol(key: string): Promise<ISearchSymbolResponse> {
        return this.get<ISearchSymbolResponse, AxiosResponse<ISearchSymbolResponse>>(
            `https://api.stocktwits.com/api/2/search/symbols.json?q=${key}`
        ).then(this.success);
    }
}
