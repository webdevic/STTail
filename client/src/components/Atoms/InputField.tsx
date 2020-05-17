import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import useDebounce from "../../hooks/use-debounce";

type IIFProps = {
    label: string;
    onInputFieldChange: (value: string) => void;
    onInputFieldFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const InputField: React.FC<IIFProps> = (props) => {
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
    return (
        <TextField
            fullWidth
            id="standard-basic"
            label={label}
            onChange={handleInputChange}
            value={keys}
            onFocus={onInputFieldFocus}
        />
    );
};

export default InputField;
