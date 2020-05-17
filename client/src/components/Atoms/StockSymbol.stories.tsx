import React from "react";
import StockSymbol from "./StockSymbol";

export default {
    component: StockSymbol,
    title: "StockSymbol",
};

const symbol = {
    id: 686,
    title: "Apple Inc.",
    symbol: "AAPL",
    messages: [],
};

export const aapl = () => {
    return (
        <StockSymbol
            symbol={symbol}
            onSymbolDelete={() => {
                alert("deleted");
            }}
        ></StockSymbol>
    );
};
