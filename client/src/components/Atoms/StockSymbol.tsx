import React from "react";
import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";

type ISSProps = {
    className?: string;
    symbol: any;
    onSymbolDelete: (value: string) => void;
};

const StockSymbol: React.FC<ISSProps> = (props) => {
    const { className, symbol, onSymbolDelete } = props;
    const count = symbol.messages ? (symbol.messages.length > 999 ? "999+" : symbol.messages.length) : 0;
    return (
        <Chip
            avatar={<Avatar style={{ background: "#9999FF" }}>{count}</Avatar>}
            className={className}
            color="primary"
            label={`$${symbol.symbol}`}
            onDelete={() => onSymbolDelete(symbol.id)}
            variant="outlined"
        />
    );
};

export default StockSymbol;
