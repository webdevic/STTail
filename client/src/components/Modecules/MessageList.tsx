import React from "react";
import MessageCard from "../Atoms/MessageCard";

type IMLProps = {
    messages: any[];
};

const MessageList: React.FC<IMLProps> = (props) => {
    const { messages } = props;
    return (
        <React.Fragment>
            {messages.map((message: any) => (
                <MessageCard message={message} key={message.id} />
            ))}
        </React.Fragment>
    );
};

export default MessageList;
