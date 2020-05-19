import React, { useState, useEffect } from "react";
import ComboBox from "../components/Organisms/ComboBox";
import { AppBar, Paper } from "@material-ui/core";
import MessageList from "../components/Modecules/MessageList";
import Alert from "@material-ui/lab/Alert";
import debug from "debug";
import { uniqueArrayById } from "../utils/unique";

const stockPageDebugger = debug("StockPage");

const refreshInterval = 120000; // Refresh every 2 minutes

const fetchMessagesById = async (id: number, messages: any[]): Promise<any[]> => {
    const req = fetch(`http://localhost:3000/api/v1/message/${id}`)
        .then((res) => res.json())
        .catch((error) => {
            throw error;
        });
    const data = await req;
    stockPageDebugger("fetchMessagesById:", { data, messages });
    return uniqueArrayById([...data, ...messages]).sort((a: any, b: any) => b.id - a.id);
};

const Stock = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [stockSymbols, setStockSymbols] = useState([]);
    const [symbolCount, setSymbolCount] = useState(0);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [messageCount, setMessageCount] = useState(0);
    const [showError, setShowError] = useState(false);
    const [showFetching, setShowFetching] = useState(false);

    // useEffect
    const refreshSymbolMessage = () => {
        stockPageDebugger("refreshSymbolMessage:", { stockSymbols, messages });
        stockSymbols.forEach(async (symbol: any) => {
            setShowFetching(true);
            setMessages(await fetchMessagesById(symbol.id, messages));
            setShowFetching(false);
        });
    };
    // Reset message refresh when stockSymbols updated
    useEffect(() => {
        stockPageDebugger("stockSymbols Changed:", { stockSymbols });
        const intervalId = setInterval(() => {
            refreshSymbolMessage();
        }, refreshInterval);

        return () => clearInterval(intervalId);
    }, [symbolCount, messages]);
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
    const searchSymbols = (keys: string) => {
        if (keys) {
            fetch(`http://localhost:3000/api/v1/symbol/search?keys=${keys}`)
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
        setShowFetching(true);
        fetchMessagesById(parseInt(id), messages)
            .then((m: any[]) => {
                setMessages(m);
            })
            .then(() => {
                setShowFetching(false);
            });
        setStockSymbols(updateSymbols);
        setSymbolCount(updateSymbols.length);
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
                    onInputFieldChange={searchSymbols}
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
