import React, { useState } from "react";
import Typeahead from "./Typeahead";

export default {
    component: Typeahead,
    title: "typeahead",
};

export const SearchStock = () => {
    const [items, setItems] = useState([]);
    const searchSymbols = (keys: string) => {
        if (keys) {
            fetch(`http://localhost:3000/api/v1/symbol/search?key=${keys}`)
                .then((res) => res.json())
                .then((data) => {
                    setItems(data);
                });
        } else {
            setItems([]);
        }
    };
    return (
        <Typeahead
            dropdownVisible={true}
            inputLabel="Stock"
            menuItems={items}
            onInputFieldChange={searchSymbols}
            onItemClick={(id: string) => alert(`${id} selected!`)}
            onInputFieldFocus={() => alert("FOCUS")}
        />
    );
};
