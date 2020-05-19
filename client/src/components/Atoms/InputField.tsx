import React, { useState, useEffect } from "react";
import { TextField, IconButton, makeStyles } from "@material-ui/core";
import useDebounce from "../../hooks/use-debounce";
import BackspaceIcon from "@material-ui/icons/Backspace";

type IIFProps = {
    label: string;
    onInputFieldChange: (value: string) => void;
    onInputFieldFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const useStyles = makeStyles((theme) => ({
    deleteButton: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        position: "absolute",
        right: 0,
    },
}));

const InputField: React.FC<IIFProps> = (props) => {
    const classes = useStyles();
    const { label, onInputFieldChange, onInputFieldFocus } = props;
    const [keys, setKeys] = useState("");
    const debouncedKeys = useDebounce(keys, 600);
    useEffect(() => {
        onInputFieldChange(debouncedKeys);
    }, [debouncedKeys]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setKeys(e.currentTarget.value);
    };
    const handleReset = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setKeys("");
    };
    return (
        <form noValidate autoComplete="off">
            <TextField
                aria-autocomplete="none"
                autoComplete=""
                fullWidth
                id="standard-basic"
                label={label}
                onChange={handleInputChange}
                value={keys}
                onFocus={onInputFieldFocus}
            />
            {keys && keys.length > 0 && (
                <IconButton aria-label="delete" className={classes.deleteButton} onClick={handleReset}>
                    <BackspaceIcon fontSize="small" />
                </IconButton>
            )}
        </form>
    );
};

export default InputField;
