import React, { useState } from "react";
import ComboBox from "../components/Organisms/ComboBox";
import { AppBar, Paper } from "@material-ui/core";
import MessageList from "../components/Modecules/MessageList";
import Alert from "@material-ui/lab/Alert";

export const Stock = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [stockSymbols, setStockSymbols] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [showError, setShowError] = useState(false);
    const [showFetching, setShowFetching] = useState(false);
    let nIntervId: any;
    const fetchMessagesById = async (id: number) => {
        setShowFetching(true);
        const req = fetch(`http://localhost:3000/api/v1/message/${id}`)
            .then((res) => res.json())
            .catch((error) => {
                throw error;
            });
        const messages = await req;
        return messages ?? [];
    };
    const searchSymbols = (keys: string) => {
        if (keys) {
            fetch(`http://localhost:3000/api/v1/symbol/search?key=${keys}`)
                .then((res) => res.json())
                .then((data) => {
                    setMenuItems(data);
                    setDropdownVisible(true);
                })
                .catch((error) => {
                    throw error;
                });
        } else {
            setMenuItems([]);
            setDropdownVisible(false);
        }
    };
    const selectSymbol = (id: string) => {
        if (stockSymbols.length >= 10) {
            setShowError(true);
            return;
        }
        const updateSymbols = stockSymbols
            .filter((symbol: any) => symbol.id !== parseInt(id))
            .concat(menuItems.filter((item: any) => item.id === parseInt(id)));
        fetchMessagesById(parseInt(id)).then((data: any[]) => {
            const newArray: any[] = [...messages, ...data];
            const deDuplicated: any[] = [];
            newArray.forEach((message) => {
                if (deDuplicated.findIndex((m) => m.id === message.id) === -1) deDuplicated.push(message);
            });
            deDuplicated.sort((a: any, b: any) => b.id - a.id);
            updateSymbols.forEach(
                (symbol: any) =>
                    (symbol.messages = deDuplicated.filter(
                        (message) => message.symbols.findIndex((s: any) => s.id === symbol.id) !== -1
                    ))
            );
            setMessages(deDuplicated);
            setShowFetching(false);
        });
        if (nIntervId) clearInterval(nIntervId);
        nIntervId = setInterval(() => {
            updateSymbols.forEach((symbol: any) => {
                fetchMessagesById(symbol.id).then((data: any[]) => {
                    const newArray: any[] = [...messages, ...data];
                    const deDuplicated: any[] = [];
                    newArray.forEach((message) => {
                        if (deDuplicated.findIndex((m) => m.id === message.id) === -1) deDuplicated.push(message);
                    });
                    deDuplicated.sort((a: any, b: any) => b.id - a.id);
                    updateSymbols.forEach(
                        (symbol: any) =>
                            (symbol.messages = deDuplicated.filter(
                                (message) => message.symbols.findIndex((s: any) => s.id === symbol.id) !== -1
                            ))
                    );
                    setMessages(deDuplicated);
                    setShowFetching(false);
                });
            });
        }, 120000);
        setStockSymbols(updateSymbols);
        setDropdownVisible(false);
    };
    const deleteSymbol = (id: string) => {
        if (stockSymbols.length <= 10) {
            setShowError(false);
        }
        const updateMessages = messages.filter((message: any) => {
            if (message.symbols.findIndex((symbol: any) => symbol.id === parseInt(id)) === -1) return true;
            return false;
        });
        const updateSymbols = stockSymbols.filter((symbol: any) => symbol.id !== parseInt(id));
        updateSymbols.forEach(
            (symbol: any) =>
                (symbol.messages = updateMessages.filter(
                    (message) => message.symbols.findIndex((s: any) => s.id === symbol.id) !== -1
                ))
        );

        if (nIntervId) clearInterval(nIntervId);
        nIntervId = setInterval(() => {
            updateSymbols.forEach((symbol: any) => {
                fetchMessagesById(symbol.id).then((data: any[]) => {
                    const newArray: any[] = [...messages, ...data];
                    const deDuplicated: any[] = [];
                    newArray.forEach((message) => {
                        if (deDuplicated.findIndex((m) => m.id === message.id) === -1) deDuplicated.push(message);
                    });
                    deDuplicated.sort((a: any, b: any) => b.id - a.id);
                    updateSymbols.forEach(
                        (symbol: any) =>
                            (symbol.messages = deDuplicated.filter(
                                (message) => message.symbols.findIndex((s: any) => s.id === symbol.id) !== -1
                            ))
                    );
                    setMessages(deDuplicated);
                    setShowFetching(false);
                });
            });
        }, 120000);
        setMessages(updateMessages);
        setStockSymbols(updateSymbols);
    };
    const showDropdown = () => {
        setDropdownVisible(true);
    };
    return (
        <React.Fragment>
            <Alert severity="error" style={{ marginBottom: 10, display: showError ? "flex" : "none" }}>
                Free API only supports 10 Symbols!
            </Alert>
            <AppBar position="sticky" color="default">
                <ComboBox
                    dropdownVisible={dropdownVisible}
                    inputLable="stock"
                    menuItems={menuItems}
                    stockSymbols={stockSymbols}
                    onInputFieldChange={searchSymbols}
                    onItemClick={selectSymbol}
                    onSymbolDelete={deleteSymbol}
                    onInputFieldFocus={showDropdown}
                />
            </AppBar>
            <Paper variant="outlined" style={{ background: "#f3e5f5" }}>
                <Alert severity="info" style={{ marginBottom: 20, display: showFetching ? "flex" : "none" }}>
                    Fetching messages...
                </Alert>
                <MessageList messages={messages} />
            </Paper>
        </React.Fragment>
    );
};
