import React from "react";
import { makeStyles, createStyles, Box } from "@material-ui/core";
import InputField from "../Atoms/InputField";
import DropdownList from "../Modecules/DropdownList";

type ITProps = {
    inputLabel: string;
    menuItems: any[];
    onInputFieldChange: (value: string) => void;
    onItemClick: (value: string) => void;
    onInputFieldFocus: () => void;
    dropdownVisible: boolean;
};

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            margin: 10,
        },
    })
);

const Typeahead: React.FC<ITProps> = (props) => {
    const classes = useStyles();
    const { dropdownVisible, inputLabel, menuItems, onInputFieldChange, onItemClick, onInputFieldFocus } = props;
    return (
        <Box className={classes.root}>
            <InputField
                label={inputLabel}
                onInputFieldChange={onInputFieldChange}
                onInputFieldFocus={onInputFieldFocus}
            />
            <DropdownList
                menuItems={menuItems}
                onItemClick={onItemClick}
                style={{ display: dropdownVisible && menuItems && menuItems.length > 0 ? "block" : "none" }}
            />
        </Box>
    );
};

export default Typeahead;
