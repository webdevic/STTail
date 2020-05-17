import React from "react";
import Typeahead from "../Modecules/Typeahead";
import StockSymbolsArray from "../Modecules/StockSymbolsArray";

type ICBProps = {
    inputLable: string;
    menuItems: any[];
    stockSymbols: any[];
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
                onInputFieldChange={onInputFieldChange}
                onItemClick={onItemClick}
                onInputFieldFocus={onInputFieldFocus}
            />
            <StockSymbolsArray stockSymbols={stockSymbols} onSymbolDelete={onSymbolDelete} />
        </div>
    );
};

export default ComboBox;
