import React, { useState } from "react";
import { MenuList, MenuItem, Paper } from "@material-ui/core";

const Typeahead = (props: { items: { id: number; symbol: string; title: string }[]; handleMenuItemClick: any }) => {
    const [items, setItems] = useState(props.items);
    return (
        <Paper>
            <MenuList>
                {items.map((item) => {
                    return <MenuItem onClick={() => props.handleMenuItemClick(item.id)}>{item.title}</MenuItem>;
                })}
            </MenuList>
        </Paper>
    );
};

export default Typeahead;
