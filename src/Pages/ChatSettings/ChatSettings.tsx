import React, {useEffect} from "react";

import {Container} from "@material-ui/core";
import Header from "../../Components/ProfileLayout/Header/Header";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


import useStyles from './classes'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from '@material-ui/core/ListSubheader';

import List from "@material-ui/core/List";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import * as ChatActions from "../../store/actions/chatActions";
import AccountCircle from "@material-ui/icons/AccountCircle";

const ShatSettingsPage = ({chats, currentChat, fetchChat}) => {
    const classes = useStyles();

    useEffect(() => {
        // @ts-ignore
        if (currentChat !== 0 && chats.allIds.every(chatId => chatId !== currentChat))
            fetchChat(currentChat)
    }, [])

    const chat = chats.byId[currentChat]

    const users = chat && chats.byId[currentChat] && chats.byId[currentChat].connectedUsers ? chats.byId[currentChat].connectedUsers : []

    return (
        <>
            <Header/>
            <Container>
                <div className={classes.toolbar}/>
                <Grid justify="center" container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.card}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {chat ? chat.chatName : null}
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardContent className={classes.controllers}>
                                <List
                                    subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                            Users
                                        </ListSubheader>
                                    }
                                    component="ul"
                                >
                                    {users.map((user) => (
                                        <ListItem key={user._id}>
                                            <ListItemIcon>
                                                <AccountCircle/>
                                            </ListItemIcon>
                                            <ListItemText primary={user.name} secondary={user.status}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" disabled>
                                    save
                                </Button>
                                <Button size="small" color="primary" disabled>
                                    exit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // @ts-ignore
        fetchChat: (chatId) => dispatch(ChatActions.fetchChat(chatId)),
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.feedState.chats,
        currentChat: state.feedState.currentChat,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShatSettingsPage)
