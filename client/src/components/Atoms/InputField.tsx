import React, { useState } from "react";
import { TextField, MenuList, MenuItem } from "@material-ui/core";

const InputField = (props: {
    label: string;
    items: { id: number; symbol: string; title: string }[];
    handleMenuItemClick: any;
}) => {
    const [items, setItems] = useState(props.items);
    return (
        <TextField select id="standard-basic" label={props.label}>
            <MenuList>
                {items.map((item) => {
                    return <MenuItem onClick={() => props.handleMenuItemClick(item.id)}>{item.title}</MenuItem>;
                })}
            </MenuList>
        </TextField>
    );
};

export default InputField;
