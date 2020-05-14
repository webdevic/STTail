/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

export default function ComboBox(props: { label: string }) {
    const [symbols, setSymbols] = useState([
        {
            id: 686,
            title: "Apple Inc.",
            symbol: "APPL",
        },
    ]);
    useEffect(() => {
        getSymbols("");
    }, []);

    const getSymbols = async (keys: string): Promise<void> => {
        const response = await axios.get("http://localhost:3000/api/v1/symbol/search?key=AAPL,BABA,BAC");
        console.log({ response });
        setSymbols(response.data);
    };
    return (
        <Autocomplete
            id="combo-box-demo"
            options={symbols}
            getOptionLabel={(option: any) => option.title}
            renderInput={(params: any) => <TextField {...params} label={props.label} variant="outlined" />}
        />
    );
}
