import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Header from "../../Components/ProfileLayout/Header/Header";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import useStyles from './classes'
import {connect} from "react-redux";
import {Dispatch} from "redux";
import * as UserActions from "../../store/actions/userActions";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const ProfilePage = ({user, changeUserName, changeUserStatus}) => {
    const classes = useStyles();
    const [username, setUsername] = useState(user.userName)
    const [userStatus, setUserStatus] = useState(user.status)

    return (
        <>
            <Header/>
            <Container fixed>
                <div className={classes.toolbar}/>
                <Card className={classes.card}>
                    {/*<Grid item xs={12}>*/}
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {user.userName}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {user.status}
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image="https://img3.stockfresh.com/files/z/zdenkam/m/61/7129871_stock-photo-casual-man-on-white.jpg"
                        title="Live from space album cover"
                    />
                    {/*</Grid>*/}
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Edit username"
                                    className={classes.textField}
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Edit status"
                                    value={userStatus}
                                    onChange={(event) => setUserStatus(event.target.value)}
                                    className={classes.textField}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => {
                            changeUserName(username)
                            changeUserStatus(userStatus)
                        }}>
                            save
                        </Button>
                        <Button size="small" color="primary" onClick={() => {
                            setUsername(user.userName)
                            setUserStatus(user.status)
                        }}>
                            exit
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
// @ts-ignore
        changeUserName: (name) => dispatch(UserActions.changeUserName(name)),
// @ts-ignore
        changeUserStatus: (status) => dispatch(UserActions.changeUserStatus(status)),
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
