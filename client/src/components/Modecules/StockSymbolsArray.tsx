import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import StockSymbol from "../Atoms/StockSymbol";
import Paper from "@material-ui/core/Paper";

export interface IChipData {
    count: number;
    key: number;
    label: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
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

const StockSymbolsArray = (props: { stockSymbols: IChipData[] }) => {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState<IChipData[]>(props.stockSymbols);

    const handleDelete = (chipToDelete: IChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Paper component="ul" className={classes.root}>
            {chipData.map((data) => {
                return (
                    <li key={data.key}>
                        <StockSymbol
                            count={data.count}
                            label={data.label}
                            handleDelete={data.label === "React" ? undefined : handleDelete(data)}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
};

export default StockSymbolsArray;
