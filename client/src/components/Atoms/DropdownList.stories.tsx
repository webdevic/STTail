import React from "react";
import DropdownList from "./DropdownList";

export default {
    component: DropdownList,
    title: "DropdownList",
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

export const DropdownWithItems = () => (
    <DropdownList
        menuItems={items}
        onItemClick={(id: string) => {
            alert(`${id} selected`);
        }}
    />
);

export const DropdownWithoutItems = () => (
    <DropdownList
        menuItems={[]}
        onItemClick={(id: string) => {
            alert(`${id} selected`);
        }}
    />
);
