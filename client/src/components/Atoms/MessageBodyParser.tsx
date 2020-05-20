import React from "react";

type IMBPProps = {
    messageBody: string;
};

const Link: React.FC<{ href: string; text: string }> = (props) => {
    const { href, text } = props;
    return (
        <a href={href} target="_blank" style={{ textDecoration: "none", color: "blue" }}>
            {text}
        </a>
    );
};

const MessageBodyParser: React.FC<IMBPProps> = (props) => {
    let { messageBody } = props;
    const symbols = messageBody.match(/\$(.*?)(?=\$)|\$\S+/gi)?.map((symbol) => {
        symbol = symbol.replace(" ", "");
        const url = `https://stocktwits.com/symbol/${symbol.replace("$", "").toUpperCase()}`;
        messageBody = messageBody.replace(symbol, "<S>");
        return { text: symbol, link: url };
    });
    const links = messageBody
        .match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi)
        ?.map((link) => {
            messageBody = messageBody.replace(link, "<L>");
            return { text: link, link };
        });
    return (
        <React.Fragment>
            {messageBody.split("<S>").map((s, index) => {
                const symbol = symbols?.shift();
                return (
                    <React.Fragment key={index}>
                        {s.indexOf("<L>") === -1
                            ? s
                            : s.split("<L>").map((l, index) => {
                                  const link = links?.shift();
                                  return (
                                      <React.Fragment key={index}>
                                          {l}
                                          {link && <Link text={link.text} href={link.link} />}
                                      </React.Fragment>
                                  );
                              })}
                        {symbol && <Link text={symbol.text} href={symbol.link} />}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};
export default MessageBodyParser;
