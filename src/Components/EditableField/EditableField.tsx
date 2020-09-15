import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import useStyles from './classes'

export default ({defaultValue, onSave, buttonText}: { defaultValue?: string, onSave: Function, buttonText: string }) => {
    const classes = useStyles();
    const [value, setValue] = useState(defaultValue ? defaultValue : "")
    const [isEditable, setIsEditable] = useState(false)

    return (
        <div className={classes.container}>
            {
                isEditable ? (
                    <>
                        <IconButton
                            onClick={() => {
                                setValue('')
                                setIsEditable(false)
                            }}
                            color="primary"
                            size="small"
                        >
                            <ClearIcon/>
                        </IconButton>
                        <TextField
                            onChange={(event) => setValue(event.target.value)}
                            label="Filled"
                            variant="filled"
                            value={value}
                            className={classes.grow}
                            size="small"
                        />
                        <IconButton
                            onClick={() => {
                                setIsEditable(false)
                                onSave(value)
                                setValue("")
                            }}
                            color="primary"
                            size="small"
                        >
                            <DoneIcon/>
                        </IconButton>
                    </>
                ) : (
                    <div>
                        <Button
                            onClick={() => {
                                setIsEditable(true)
                            }}
                            variant="contained"
                            color="primary"
                            disableElevation
                            className={classes.grow}
                        >
                            {buttonText}
                        </Button>
                    </div>
                )
            }
        </div>
    )
}
