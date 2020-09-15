import React, {useReducer, useState} from 'react';
import Modal from '@material-ui/core/Modal';

import LoginFormContainer from "../../Components/LoginFormContainer/LoginFormContainer";
import LoginForm from "../../Components/LoginForm/LoginForm";

import {reducer, initialState} from "./reducer/fieldsReducer";
import {changeField, validateFields} from "./reducer/actions";
import {Redirect} from "react-router-dom";

import useStyles from './classes'
import {FieldName} from "./reducer/actionTypes";
import {emit} from "../../utils/util";
import {Dispatch} from "redux";
import * as UserAction from "../../store/actions/userActions";
import {connect} from "react-redux";

const LoginPage = ({signIn, signUp, isAuth}: { signIn: Function, signUp: Function, isAuth: boolean }) => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [fields, dispatch] = useReducer(reducer, initialState)

    const classes = useStyles();

    const rootRef = React.useRef<HTMLDivElement>(null);

    const signInHandler = () => {
        if (!isSignIn)
            return setIsSignIn(true)
        dispatch(validateFields())
        const signInFields = emit(fields, "username")

        // @ts-ignore
        Object.values(signInFields).every(({valid}) => (valid))
        // @ts-ignore
        signIn(fields.email.value, fields.password.value)
    }

    const signUpHandler = () => {
        if (isSignIn)
            return setIsSignIn(false)
        dispatch(validateFields())
        Object.values(fields).every(({valid}) => (valid))
        // @ts-ignore
        signUp(fields.email.value, fields.username.value, fields.password.value)
        setIsSignIn(true)
    }

    if (isAuth)
        return (<Redirect to='/chat'/>)

    return (
        <div className={classes.root} ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
            >
                <div>
                    <LoginFormContainer signInHandler={signInHandler} signUpHandler={signUpHandler}>
                        <LoginForm
                            title={isSignIn ? "Sign in" : "Sign up"}
                            fields={isSignIn ? emit(fields, "username") : fields}
                            changeHandler={(fieldName: FieldName, value: string) => dispatch(changeField(fieldName, value))}
                        />
                    </LoginFormContainer>
                </div>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // @ts-ignore
        signIn: (email: string, password: string) => dispatch(UserAction.login(email, password)),
        // @ts-ignore
        signUp: (email: string, name: string, password: string) => dispatch(UserAction.signUp(email, name, password))
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.userState.isAuth,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
