import React from "react";
import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";

const StockSymbol = (props: { label: string; handleDelete: any; count: number; className?: string }) => {
    return (
        <Chip
            avatar={<Avatar style={{ background: "#9999FF" }}>{props.count > 999 ? "999+" : props.count}</Avatar>}
            className={props.className}
            color="primary"
            label={props.label}
            onDelete={props.handleDelete}
            variant="outlined"
        />
    );
};

export default StockSymbol;
