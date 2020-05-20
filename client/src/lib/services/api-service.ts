import debug from "debug";
require("dotenv").config();

const apiServiceDebugger = debug("api-service");

const endpoint = process.env.REACT_APP_API_SERVER ? process.env.REACT_APP_API_SERVER : "";

apiServiceDebugger("SERVER_ENDPOINT", endpoint);

/**
 *
 * @param id
 */
export const fetchMessagesById = async (id: number): Promise<any[]> => {
    try {
        const res = await fetch(`${endpoint}/api/v1/message/${id}`);
        return res.json();
    } catch (error) {
        throw error;
    }
};

/**
 *
 * @param keys
 */
export const fetchStockSymbols = async (keys: string): Promise<any[]> => {
    try {
        const res = await fetch(`${endpoint}/api/v1/symbol/search?keys=${keys}`);
        return res.json();
    } catch (error) {
        throw error;
    }
};
