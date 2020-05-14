import React from "react";
import StockSymbolsArray, { IChipData } from "./StockSymbolsArray";

export default {
    component: StockSymbolsArray,
    title: "StockSymbolsArray",
};

export const test = () => {
    const data: IChipData[] = [
        { count: 0, key: 0, label: "Angular" },
        { count: 123, key: 1, label: "jQuery" },
        { count: 9999, key: 2, label: "Polymer" },
        { count: 11, key: 3, label: "React" },
        { count: -1, key: 4, label: "Vue.js" },
    ];

    return <StockSymbolsArray stockSymbols={data} />;
};
