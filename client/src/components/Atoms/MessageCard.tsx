import React from "react";
import { makeStyles, createStyles, Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import MessageBodyParser from "./MessageBodyParser";

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
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.cover} image={message.user.avatar_url} title="Live from space album cover" />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        <MessageBodyParser messageBody={message.body} />
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {message.user.name ? message.user.name : message.user.username}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default MessageCard;
