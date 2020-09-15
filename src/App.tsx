import React, {useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import Profile from "./Pages/Profile/Profile";
import Chat from './Pages/Chat/Chat'
import ChatSettings from "./Pages/ChatSettings/ChatSettings";
import Login from './Pages/Login/Login'
import {Dispatch} from "redux";
import {useHistory} from "react-router-dom";
import {fetchUser} from "./store/actions/userActions";

function App({login, isAuth}) {
    let history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (Boolean(token) && !isAuth) {
            login()
        } else {
            setTimeout(() => {
                if (!isAuth)
                    history.push('/login')
            }, 1800)
        }
    }, [])

    return (
        <div>
            <Switch>
                <Route
                    path="/profile"
                    exact
                    render={() => isAuth ? <Profile/> : <Redirect to="/login"/>}
                />
                <Route
                    path="/chatSettings"
                    exact
                    render={() => isAuth ? <ChatSettings/> : <Redirect to="/login"/>}
                />
                <Route
                    path="/login"
                    exact
                    render={() => <Login/>}
                />
                <Route
                    path="/chat"
                    render={() => <Chat/>}
                />
                <Route
                    path="/"
                    exact
                    render={() => isAuth ? <Redirect to="/chat"/> : <div/>}
                />
            </Switch>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // @ts-ignore
        login: () => dispatch(fetchUser()),
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.userState.isAuth,
    }
}

export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
