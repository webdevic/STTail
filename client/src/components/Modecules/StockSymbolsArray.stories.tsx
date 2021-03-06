import React, { useState } from "react";
import StockSymbolsArray from "./StockSymbolsArray";

export default {
    component: StockSymbolsArray,
    title: "StockSymbolsArray",
};

const items = [
    { type: "symbol", id: 12886, title: "Slack", symbol: "WORK", exchange: "NYSE" },
    { type: "symbol", title: "Work Market", symbol: "WRKMK", exchange: "PRIVATE", id: 9161 },
    { type: "symbol", title: "Workday", symbol: "WDAY", exchange: "NYSE", id: 11329 },
    { type: "symbol", title: "Workday", symbol: "WRKD", exchange: "PRIVATE", id: 9130 },
    { type: "symbol", title: "Workhorse Group ", symbol: "WKHS", exchange: "NASDAQ", id: 12960 },
    { type: "symbol", title: "Workiva", symbol: "WK", exchange: "NYSE", id: 12276 },
    { type: "symbol", title: "Workplace Equality ETF", symbol: "EQLT", exchange: "NYSEArca", id: 13396 },
    { type: "symbol", title: "Workspace Property Trust", symbol: "WSPT", exchange: "PRIVATE", id: 14067 },
    { type: "symbol", title: "Workstream Inc.", symbol: "WSTMF", exchange: "OTCBB", id: 4140 },
];

export const test = () => {
    const handleDelete = (value: string) => {
        console.log({ value });
        alert(`${value} deleted!`);
    };
    return <StockSymbolsArray stockSymbols={items} onSymbolDelete={handleDelete} />;
};
