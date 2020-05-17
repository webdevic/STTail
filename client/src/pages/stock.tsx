import React, { useState } from "react";
import ComboBox from "../components/Organisms/ComboBox";
import { AppBar, Paper } from "@material-ui/core";
import MessageList from "../components/Modecules/MessageList";
import Alert from "@material-ui/lab/Alert";

const deDuplicate = (items: any[]) => {
    const deDup: any[] = [];
    items.forEach((item) => {
        if (deDup.findIndex((i) => i.id === item.id) === -1) deDup.push(item);
    });
    return deDup;
};

const fetchMessagesById = async (id: number, oldMsgs: any[], inputSymbols: any[]): Promise<any[]> => {
    const req = fetch(`http://localhost:3000/api/v1/message/${id}`)
        .then((res) => res.json())
        .catch((error) => {
            throw error;
        });
    const data = await req;
    const deDuplicated = deDuplicate([...data, ...oldMsgs]);
    deDuplicated.sort((a: any, b: any) => b.id - a.id);
    inputSymbols.forEach(
        (symbol: any) =>
            (symbol.messages = deDuplicated.filter(
                (m: any) => m.symbols.findIndex((s: any) => s.id === symbol.id) !== -1
            ))
    );
    return [deDuplicated, inputSymbols];
};

class RefreshManager {
    private nIntervId: any;
    public setIntervle(handler: () => void, duration: number) {
        console.log("old setIntervle:", this.nIntervId);
        this.stop();
        this.nIntervId = setInterval(handler, duration);
        console.log("new setIntervle:", this.nIntervId);
    }
    public stop() {
        if (this.nIntervId) clearInterval(this.nIntervId);
    }
}

const refreshManager = new RefreshManager();

export const Stock = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [stockSymbols, setStockSymbols] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [showError, setShowError] = useState(false);
    const [showFetching, setShowFetching] = useState(false);
    const refreshSymbolMessage = async (symbols: any[]) => {
        for (let symbol of symbols) {
            setShowFetching(true);
            await fetchMessagesById(symbol.id, [...messages], [...symbols])
                .then(([m, s]) => {
                    setMessages(m);
                    setStockSymbols(s);
                })
                .then(() => {
                    setShowFetching(false);
                });
        }
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
        setShowFetching(true);
        fetchMessagesById(parseInt(id), [...messages], [...updateSymbols])
            .then(([m, s]) => {
                setMessages(m);
                setStockSymbols(s);
            })
            .then(() => {
                refreshManager.setIntervle(async () => {
                    await refreshSymbolMessage([...updateSymbols]);
                }, 120000);
                setShowFetching(false);
            });
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
        refreshManager.setIntervle(async () => {
            await refreshSymbolMessage([...updateSymbols]);
        }, 120000);
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
                    Total Tweets: {messages.length}.
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
