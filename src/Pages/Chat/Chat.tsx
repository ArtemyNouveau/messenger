import React, {useEffect, useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import socket from '../../socket'

import Drawer from "../../Components/Drawer/Drawer";
import Header from "../../Components/ChatLayout/Header/Header";
import Footer from "../../Components/ChatLayout/Footer/Footer";
import Chat from "../../Components/Chat/Chat";
import EditableField from "../../Components/EditableField/EditableField";

import useStyles from './classes'
import IconButton from "@material-ui/core/IconButton";
import {useHistory} from "react-router-dom";
import * as ChatActions from "../../store/actions/chatActions";
import {Chats} from "../../store/reducers/chats";
import {parseQuery} from "../../utils/util";

const ChatPage = ({isAuth, userChats, currentChat, fetchUserChats, changeCurrentChat, createNewChat, receiveMessage, setConnectedUsers}: { isAuth: boolean, userChats: Chats, currentChat: number, fetchUserChats: Function, changeCurrentChat: Function, createNewChat: Function, receiveMessage: Function, setConnectedUsers: Function }) => {
    let history = useHistory();
    const classes = useStyles();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (!isAuth)
                history.push('/login')
        }, 1500)
        fetchUserChats()
        const query = parseQuery(history.location.search)
        // @ts-ignore
        if (query.hasOwnProperty('chat'))
            // @ts-ignore
            if (query.chat !== 0)
                // @ts-ignore
                changeCurrentChat(query.chat)
            else
                changeCurrentChat(userChats[0])

        const token = localStorage.getItem('authToken');

        if (token) {
            const socketInstance = socket.init('http://localhost:8080', token)

            socketInstance.on("message", payload => {
                receiveMessage(payload.chatId, payload.message)
            })

            socketInstance.on("userConnected", payload => {
                setConnectedUsers(payload.chatId, payload.users)
            })

            socketInstance.on("userDisconnected", payload => {
                setConnectedUsers(payload.chatId, payload.users)
            })

            window.addEventListener('beforeunload', socketInstance.disconnect);
        }
    }, [])

    useEffect(() => {
        if (currentChat === 0)
            return

        try {
            const socketInstance = socket.getIO()
            socketInstance.emit("room", {
                chatId: currentChat,
            })
        } catch (err) {
            console.error(err)
        }

        history.replace({
            search: `?chat=${currentChat}`
        })
    }, [currentChat])

    return (
        <div className={classes.root}>
            <Header open={isDrawerOpen} handleDrawerOpen={() => setDrawerOpen(true)}/>
            <Drawer open={isDrawerOpen} handleDrawerClose={() => setDrawerOpen(false)}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <AddBoxIcon/>
                        </ListItemIcon>
                        <EditableField
                            onSave={(title) => {
                                createNewChat(title)
                            }}
                            buttonText="Create chat"
                        />
                    </ListItem>
                    {userChats.allIds.map((chatId) => (
                        <ListItem
                            button key={chatId}
                            onClick={() => changeCurrentChat(chatId)}
                        >
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={userChats.byId[chatId].chatName}/>
                            <ListItemIcon style={{justifyContent: "flex-end"}}>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={() => {
                                        history.push("/chatSettings");
                                    }}
                                    size="small"
                                    color="inherit"
                                >
                                    <MoreVertIcon/>
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.chat}>
                    <div className={classes.toolbar}/>
                    <Chat/>
                    <div className={classes.toolbar}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // @ts-ignore
        sendMessage: (text: string, chatId: string, imageUrl = null) => dispatch(ChatActions.sendMessage(chatId, text, imageUrl)),
        // @ts-ignore
        fetchUserChats: () => dispatch(ChatActions.fetchUserChats()),
        // @ts-ignore
        changeCurrentChat: (chatId: string) => dispatch(ChatActions.changeChat(chatId)),
        // @ts-ignore
        createNewChat: (title: string) => dispatch(ChatActions.addChat(title)),
        // @ts-ignore
        receiveMessage: (chatId: string, message) => dispatch(ChatActions.receiveMessage(chatId, message)),
        // @ts-ignore
        setConnectedUsers: (chatId, users) => dispatch(ChatActions.setConnectedUsers(chatId, users))
    }
}

const mapStateToProps = (state) => {
    return {
        userChats: state.feedState.userChats,
        currentChat: state.feedState.currentChat,
        token: state.userState.token,
        isAuth: state.userState.isAuth,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)
