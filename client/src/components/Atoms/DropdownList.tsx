import React, { useEffect } from "react";
import { MenuList, MenuItem } from "@material-ui/core";

type IDLProps = {
    menuItems: any[];
    onItemClick: (value: string) => void;
    style?: React.CSSProperties;
};

const DropdownList: React.FC<IDLProps> = (props) => {
    const { menuItems, onItemClick, style } = props;
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        onItemClick((event.currentTarget as HTMLElement).id);
    };
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Tab") {
            event.preventDefault();
        }
    }
    return (
        <MenuList autoFocusItem onKeyDown={handleListKeyDown} style={style}>
            {menuItems &&
                menuItems.map((item: any) => (
                    <MenuItem id={item.id} onClick={handleClose} key={item.symbol}>
                        {item.title}
                    </MenuItem>
                ))}
        </MenuList>
    );
};

export default DropdownList;
