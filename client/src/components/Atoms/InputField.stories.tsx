import React from "react";
import InputField from "./InputField";

export default {
    component: InputField,
    title: "InputField",
};

const items = [
    {
        id: 686,
        symbol: "AAPL",
        title: "Apple Inc.",
    },
];

export const Hello = () => (
    <InputField
        label="Hello"
        items={items}
        handleMenuItemClick={(id: number) => {
            alert(`${id} added`);
        }}
    />
);
