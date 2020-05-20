import React, { useState, useEffect } from "react";
import ComboBox from "../components/Organisms/ComboBox";
import { AppBar, Paper } from "@material-ui/core";
import MessageList from "../components/Modecules/MessageList";
import Alert from "@material-ui/lab/Alert";
import debug from "debug";
import { uniqueArrayById } from "../utils/unique";

const stockPageDebugger = debug("StockPage");

const refreshInterval = 120000; // Refresh every 2 minutes

const fetchMessagesById = async (id: number): Promise<any[]> => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/message/${id}`);
        return res.json();
    } catch (error) {
        throw error;
    }
};

const fetchStockSymbols = async (keys: string): Promise<any[]> => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/symbol/search?keys=${keys}`);
        return res.json();
    } catch (error) {
        throw error;
    }
};

const Stock = () => {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [stockSymbols, setStockSymbols] = useState<any[]>([]);
    const [symbolCount, setSymbolCount] = useState(0);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [messageCount, setMessageCount] = useState(0);
    const [showError, setShowError] = useState(false);
    const [showFetching, setShowFetching] = useState(false);

    // useEffect
    const refreshSymbolMessage = async () => {
        let newMessages: any[] = [...messages];
        for (let symbol of stockSymbols) {
            setShowFetching(true);
            newMessages = uniqueArrayById([...newMessages, ...(await fetchMessagesById(symbol.id))]);
            setMessages(newMessages.sort((a, b) => b.id - a.id));
            setShowFetching(false);
        }
    };
    // Reset message refresh when stockSymbols updated
    // Remember to all values from the component scope (such as props and state)
    // that change over time and that are used by the effect.
    useEffect(() => {
        stockPageDebugger("stockSymbols Changed:", { stockSymbols });
        if (symbolCount > 0) {
            const intervalId = setInterval(() => {
                refreshSymbolMessage();
            }, refreshInterval);

            return () => clearInterval(intervalId);
        }
    }, [symbolCount, messages, setMessages]);
    // Reset message count
    useEffect(() => {
        if (messages) {
            stockPageDebugger("Message Count: ", messages.length, stockSymbols);
            setMessageCount(messages.length);
            stockSymbols.forEach(
                (symbol: any) =>
                    (symbol.messages = messages.filter(
                        (m: any) => m.symbols.findIndex((s: any) => s.id === symbol.id) !== -1
                    ))
            );
            setStockSymbols(stockSymbols);
        }
    }, [messages]);

    // handle DOM actions
    const searchStockSymbols = async (keys: string) => {
        if (keys) {
            setMenuItems(await fetchStockSymbols(keys));
            setDropdownVisible(true);
        } else {
            setMenuItems([]);
            setDropdownVisible(false);
        }
    };
    const selectSymbol = async (id: string) => {
        setDropdownVisible(false);
        if (stockSymbols.length >= 10) {
            setShowError(true);
            return;
        }
        const updateSymbols = stockSymbols
            .filter((symbol: any) => symbol.id !== parseInt(id))
            .concat(menuItems.filter((item: any) => item.id === parseInt(id)));
        setStockSymbols(updateSymbols);
        setSymbolCount(updateSymbols.length);
        setShowFetching(true);
        setMessages(
            uniqueArrayById([...messages, ...(await fetchMessagesById(parseInt(id)))]).sort((a, b) => b.id - a.id)
        );
        setShowFetching(false);
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
        setMessages(updateMessages);
        setStockSymbols(updateSymbols);
        setSymbolCount(updateSymbols.length);
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
                    inputLable="Search for stock(s), eg: AAPL or AAPL,BABA,BAC, etc..."
                    menuItems={menuItems}
                    stockSymbols={stockSymbols}
                    onInputFieldChange={searchStockSymbols}
                    onItemClick={selectSymbol}
                    onSymbolDelete={deleteSymbol}
                    onInputFieldFocus={showDropdown}
                />
            </AppBar>
            <Paper variant="outlined" style={{ background: "#f3e5f5" }}>
                <Alert
                    severity="info"
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 50,
                        marginRight: 50,
                        display: !showFetching ? "flex" : "none",
                    }}
                >
                    Total Tweets: {messageCount}.
                </Alert>
                <Alert
                    severity="success"
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 50,
                        marginRight: 50,
                        display: showFetching ? "flex" : "none",
                    }}
                >
                    Fetching messages...
                </Alert>
                <MessageList messages={messages} />
            </Paper>
        </React.Fragment>
    );
};

export default Stock;
