import React, { useState } from "react";
import ComboBox from "../components/Organisms/ComboBox";
import { AppBar } from "@material-ui/core";

export const Stock = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [stockSymbols, setStockSymbols] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const searchSymbols = (keys: string) => {
        if (keys) {
            fetch(`http://localhost:3000/api/v1/symbol/search?key=${keys}`)
                .then((res) => res.json())
                .then((data) => {
                    setMenuItems(data);
                });
        } else {
            setMenuItems([]);
            setDropdownVisible(false);
        }
    };
    const selectSymbol = (id: string) => {
        setStockSymbols(
            stockSymbols
                .filter((symbol: any) => symbol.id !== parseInt(id))
                .concat(menuItems.filter((item: any) => item.id === parseInt(id)))
        );
        setDropdownVisible(false);
    };
    const deleteSymbol = (id: string) => {
        setStockSymbols(stockSymbols.filter((symbol: any) => symbol.id !== parseInt(id)));
    };
    const showDropdown = () => {
        setDropdownVisible(true);
    };
    return (
        <AppBar position="sticky" color="transparent">
            <ComboBox
                dropdownVisible={dropdownVisible}
                inputLable="stock"
                menuItems={menuItems}
                stockSymbols={stockSymbols}
                onInputFieldChange={searchSymbols}
                onItemClick={selectSymbol}
                onSymbolDelete={deleteSymbol}
                onInputFieldFocus={showDropdown}
            />
        </AppBar>
    );
};
