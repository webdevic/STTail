import React from "react";
import ComboBox from "./ComboBox";

export default {
    component: ComboBox,
    title: "ComboBox",
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

export const searchBox = () => {
    const searchSymbols = (keys: string) => {
        if (keys) {
            fetch(`http://localhost:3000/api/v1/symbol/search?key=${keys}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log({ data });
                });
        }
    };
    const selectSymbol = (id: string) => {
        alert(`${id} selected`);
    };
    const deleteSymbol = (id: string) => {
        alert(`${id} deleted`);
    };
    return (
        <ComboBox
            dropdownVisible={true}
            inputLable="Stock"
            menuItems={items}
            stockSymbols={items}
            onInputFieldChange={searchSymbols}
            onItemClick={selectSymbol}
            onSymbolDelete={deleteSymbol}
            onInputFieldFocus={() => alert("FOCUS")}
        />
    );
};
