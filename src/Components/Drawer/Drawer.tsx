import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {useTheme} from "@material-ui/core/styles";

import useStyles from './classes'

export default ({open, children, handleDrawerClose}: {open: boolean, children: Array<JSX.Element> | JSX.Element, handleDrawerClose: Function}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={() => handleDrawerClose()}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <Divider/>
            <div className={classes.hideScrollParent}>
                <div className={classes.hideScrollChild}>
                    {children}
                    <div className={classes.toolbar}/>
                </div>
            </div>
        </Drawer>
    )
}
