import React from "react";
import Typeahead from "./Typeahead";

export default {
    component: Typeahead,
    title: "typeahead",
};

const items = [
    {
        id: 686,
        symbol: "AAPL",
        title: "Apple Inc.",
    },
];

export const search = () => {
    return (
        <Typeahead
            items={items}
            handleMenuItemClick={(id: number) => {
                alert(`${id} added`);
            }}
        />
    );
};
