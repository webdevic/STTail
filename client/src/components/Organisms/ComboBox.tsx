import React from "react";
import Typeahead from "./Typeahead";
import StockSymbolsArray from "../Modecules/StockSymbolsArray";

type ICBProps = {
    inputLable: string;
    menuItems: any[];
    stockSymbols: any[];
    onEnterKeyDown: (value: string) => void;
    onInputFieldChange: (value: string) => void;
    onItemClick: (value: string) => void;
    onSymbolDelete: (value: string) => void;
    onInputFieldFocus: () => void;
    dropdownVisible: boolean;
};

const ComboBox: React.FC<ICBProps> = (props) => {
    const {
        dropdownVisible,
        inputLable,
        menuItems,
        stockSymbols,
        onEnterKeyDown,
        onInputFieldChange,
        onItemClick,
        onSymbolDelete,
        onInputFieldFocus,
    } = props;
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Typeahead
                dropdownVisible={dropdownVisible}
                inputLabel={inputLable}
                menuItems={menuItems}
                onEnterKeyDown={onEnterKeyDown}
                onInputFieldChange={onInputFieldChange}
                onItemClick={onItemClick}
                onInputFieldFocus={onInputFieldFocus}
            />
            <StockSymbolsArray stockSymbols={stockSymbols} onSymbolDelete={onSymbolDelete} />
        </div>
    );
};

export default ComboBox;
