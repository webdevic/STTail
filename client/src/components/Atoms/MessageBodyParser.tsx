import React from "react";

type IMBPProps = {
    messageBody: string;
};

const Link: React.FC<{ href: string; text: string }> = (props) => {
    const { href, text } = props;
    return (
        <a href={href} target="_blank" style={{ textDecoration: "none", color: "hotpink" }}>
            {text}
        </a>
    );
};

const MessageBodyParser: React.FC<IMBPProps> = (props) => {
    let { messageBody } = props;
    // console.log("messageBody:", messageBody);
    // const symbols = messageBody.match(/\$\S+/gi)?.map((symbol) => {
    //     const url = `https://stocktwits.com/symbol/${symbol.replace("$", "")}`;
    //     const html = `<a href="${url}" target="_blank">${symbol}</a>`;
    //     messageBody = messageBody.replace(symbol, html);
    //     return { text: symbol, link: `https://stocktwits.com/symbol/${symbol.replace("$", "")}` };
    // });
    // const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    // const links = messageBody.split(" ");
    // console.log(messageBody, links, symbols);
    return <span>{messageBody}</span>;
};
export default MessageBodyParser;
