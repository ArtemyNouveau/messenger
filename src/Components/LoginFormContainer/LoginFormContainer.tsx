import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import useStyles from './classes'

export default ({children, signInHandler, signUpHandler} : { children: JSX.Element; signInHandler: Function; signUpHandler: Function }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                {children}
            </CardContent>
            <CardActions className={classes.actions}>
                <ButtonGroup size="large" variant="text">
                    <Button color="primary" onClick={() => signInHandler()}>Sign in</Button>
                    <Button color="default" onClick={() => signUpHandler()}>Sign up</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
}
