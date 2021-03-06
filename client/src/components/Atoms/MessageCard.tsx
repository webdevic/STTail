import React, { useState } from "react";
import { makeStyles, createStyles, Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import MessageBodyParser from "./MessageBodyParser";
import timeAgo from "../../utils/time-ago";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-bewteen",
            alignContent: "center",
            alignItems: "center",
            margin: 20,
        },
        details: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
        content: {
            flex: "1 0 auto",
            whiteSpace: "pre-line",
            textDecoration: "none",
            color: "hotpink",
            overflowWrap: "anywhere",
        },
        cover: {
            minWidth: 50,
            height: 50,
            margin: 20,
        },
    })
);

const MessageCard: React.FC<{ message: any }> = (props) => {
    const { message } = props;
    const [postTime, setPostTime] = useState(timeAgo(new Date(message.created_at)));
    const classes = useStyles();

    setInterval(() => {
        setPostTime(timeAgo(new Date(message.created_at)));
    }, 1000);

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={message.user.avatar_url ? message.user.avatar_url : "/logo192.png"}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        <MessageBodyParser messageBody={message.body} />
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <span>{message.user.name ? message.user.name : message.user.username}</span>
                        <span>{postTime}</span>
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default MessageCard;
