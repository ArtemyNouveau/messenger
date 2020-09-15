import React, {useEffect, useRef} from 'react'

import Message from "./Message/Message";

import useStyles from './classes'
import {Dispatch} from "redux";
import * as ChatActions from "../../store/actions/chatActions";
import {connect} from "react-redux";
import {Chats} from "../../store/reducers/chats";

const Chat = ({currentChat, chats, userId, fetchChat}: {currentChat: string, chats: Chats, userId: string, fetchChat: Function}) => {
    const classes = useStyles();

    const messagesEndRef = useRef(null)

    // @ts-ignore
    const scrollToBottom = () => messagesEndRef.current.scrollIntoView({behavior: "smooth"});

    useEffect(scrollToBottom, [chats, currentChat]);
    useEffect(() => {
        // @ts-ignore
        if (currentChat !== 0 && chats.allIds.every(chatId => chatId !== currentChat))
            fetchChat(currentChat)
    }, [currentChat])

    const chat = chats.byId[currentChat]
    const messages = chat ? chat.messages : null
    return (
        <div className={classes.feed}>
            <span ref={messagesEndRef}/>

            {messages ? messages.map(message => {
                return (
                    <Message author={message.creator.name}
                             imageUrl={null}
                             text={message.text}
                             isMine={userId === message.creator._id}
                             key={message._id}
                             date={message.createdAt}
                    />
                )
            }).reverse() : null}
        </div>
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
        userId: state.userState.user.id,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
