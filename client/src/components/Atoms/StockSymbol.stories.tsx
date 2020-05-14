import React from "react";
import StockSymbol from "./StockSymbol";

export default {
    component: StockSymbol,
    title: "StockSymbol",
};

export const aapl = () => {
    return (
        <StockSymbol
            count={999}
            label={"Apple Inc."}
            handleDelete={() => {
                alert("deleted");
            }}
        ></StockSymbol>
    );
};
