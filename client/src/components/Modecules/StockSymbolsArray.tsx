import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import StockSymbol from "../Atoms/StockSymbol";
import { Box } from "@material-ui/core";

type ISSAProps = {
    stockSymbols: any[];
    onSymbolDelete: (value: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "left",
            flexWrap: "wrap",
            listStyle: "none",
            padding: theme.spacing(0.5),
            margin: 0,
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    })
);

const StockSymbolsArray: React.FC<ISSAProps> = (props) => {
    const { stockSymbols, onSymbolDelete } = props;
    const classes = useStyles();

    return (
        <Box component="ul" className={classes.root}>
            {stockSymbols.map((symbol) => {
                return (
                    <li key={symbol.id}>
                        <StockSymbol symbol={symbol} onSymbolDelete={onSymbolDelete} className={classes.chip} />
                    </li>
                );
            })}
        </Box>
    );
};

export default StockSymbolsArray;
