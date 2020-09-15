import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

import useStyles from './classes'

export default ({children}: {children: Array<JSX.Element> | JSX.Element}) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.bottomBar} component={"div"}>
            <Toolbar className={classes.toolBar}>
                {children}
            </Toolbar>
        </AppBar>
    )
}
