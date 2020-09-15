import React from "react";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

import Header from "../../Header/Header";

import useStyles from './classes'

export default ({open, handleDrawerOpen}: {open: boolean; handleDrawerOpen: Function}) => {
    const classes = useStyles();
    let history = useHistory();

    return (
        <Header open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => handleDrawerOpen()}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography className={classes.title}/>

                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => {
                            history.push("/profile");
                        }}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                </div>
            </Toolbar>
        </Header>
    )
}
