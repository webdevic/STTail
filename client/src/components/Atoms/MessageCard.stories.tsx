import React from "react";
import MessageCard from "./MessageCard";

export default {
    component: MessageCard,
    title: "MessageCard",
};

const message = {
    id: 213191794,
    body:
        "$WORK  \nYale also showed a new stake in Slack Technologies Inc.\nhttps://finance.yahoo.com/amphtml/news/yale-expands-stock-portfolio-more-201928127.html",
    created_at: "2020-05-17T02:19:01Z",
    user: {
        id: 3359442,
        username: "FizzyWizzy",
        name: "Fizzy Wizzy",
        avatar_url: "https://avatars.stocktwits.com/production/3359442/thumb-1587876585.png",
        avatar_url_ssl: "https://avatars.stocktwits.com/production/3359442/thumb-1587876585.png",
        join_date: "2020-04-26",
        official: false,
        identity: "User",
        classification: [],
        followers: 0,
        following: 2,
        ideas: 49,
        watchlist_stocks_count: 16,
        like_count: 21,
        plus_tier: "",
        premium_room: "",
        trade_app: false,
    },
    source: {
        id: 2269,
        title: "StockTwits Web",
        url: "https://stocktwits.com",
    },
    symbols: [
        {
            id: 686,
            symbol: "AAPL",
            title: "Apple Inc.",
            aliases: [],
            is_following: false,
            watchlist_count: 392999,
        },
    ],
    conversation: {
        parent_message_id: 213191794,
        in_reply_to_message_id: null,
        parent: true,
        replies: 1,
    },
    mentioned_users: [],
    entities: {
        sentiment: null,
    },
    filters: {
        day_counts: 2,
        official_api: true,
    },
};

export const TestMessageCard = () => <MessageCard message={message} />;
