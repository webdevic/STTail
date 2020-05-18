import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./components/ProTip";
import Stock from "./pages/Stock";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="right">
            {"Copyright © "}
            <Link color="inherit" href="https://haos.io/">
                STTail
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    StockTwits Search
                </Typography>
                <Stock />
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}
