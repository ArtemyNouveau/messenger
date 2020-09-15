import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";

import useStyles from './classes'

export default ({open, children}: {open?: boolean, children?: Array<JSX.Element> | JSX.Element}) => {
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            {children}
        </AppBar>
    )
}
