import React, {useState} from "react";
import ImageIcon from '@material-ui/icons/Image';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";

import Footer from "../../Footer/Footer";

import useStyles from './classes'
import {Dispatch} from "redux";
import * as ChatActions from "../../../store/actions/chatActions";
import {connect} from "react-redux";

const MessageSender = ({chatId, sendMessage}: {chatId: string, sendMessage: Function}) => {
    const classes = useStyles();
    const [messageText, setMessageText] = useState("")

    return (
        <Footer>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                }}
                color="inherit"
                disabled
            >
                <ImageIcon/>
            </IconButton>
            <TextField
                variant="outlined"
                size="small"
                fullWidth
                className={classes.input}
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
            />
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                    setMessageText("")
                    sendMessage(chatId, messageText)
                }}
                color="inherit"
            >
                <SendIcon/>
            </IconButton>
        </Footer>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // @ts-ignore
        sendMessage: (chatId: string, text: string) => dispatch(ChatActions.sendMessage(chatId, text)),
    }
}

const mapStateToProps = (state) => {
    return {
        chatId: state.feedState.currentChat,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSender)
