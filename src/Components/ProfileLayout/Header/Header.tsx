import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import Header from "../../Header/Header";
import { useHistory } from "react-router-dom";

import useStyles from './classes'

export default () => {
    let history = useHistory();
    const classes = useStyles();

    return (
        <Header>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => {
                        history.push("/");
                    }}
                    edge="start"
                    className={classes.menuButton}
                >
                    <ArrowBackIosIcon/>
                </IconButton>
                <Typography/>
            </Toolbar>
        </Header>
    )
}
