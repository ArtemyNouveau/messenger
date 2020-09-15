import React, {Fragment} from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {State} from '../../Pages/Login/reducer/fieldsReducer'

import useStyles from './classes'

export default ({fields, title, changeHandler} : { fields: State; title: string; changeHandler: Function}): JSX.Element => {
    const classes = useStyles();

    return (
        <Fragment>
            <Typography gutterBottom variant="h5" component="h1">
                {title}
            </Typography>
            <form className={classes.root} noValidate autoComplete="on">
                {Object.entries(fields).map(([fieldName, {value, valid}]) => (
                    <TextField
                        key={fieldName}
                        className={classes.inputField}
                        value={value}
                        error={!valid}
                        placeholder={fieldName}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={(event) => changeHandler(fieldName, event.target.value)}
                    />
                ))}
            </form>
        </Fragment>
    )
}
