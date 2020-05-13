import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig } from "./api.config";

export default class Client {
    [x: string]: any;

    public constructor(config?: AxiosRequestConfig) {
        this.api = axios.create(config);

        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            baseUrl: process.env.API_BASE_URL,
            ...param,
        }));

        this.getUri = this.getUri.bind(this);
        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
    }

    public getUri(config?: AxiosRequestConfig): string {
        return this.api.api.getUri(config);
    }

    public request<T, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return this.api.api.request(config);
    }

    public get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.get(url, config);
    }

    public success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    public error(error: AxiosError<Error>) {
        throw error;
    }
}
