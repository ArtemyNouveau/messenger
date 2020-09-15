import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {red} from '@material-ui/core/colors';

export default makeStyles((theme: Theme) =>
    createStyles({
        row: {
            width: "100%",
            display: "flex",
            marginTop: theme.spacing(1)
        },
        mine: {
            justifyContent: "flex-end"
        },
        notMine: {
            justifyContent: "flex-start"
        },
        message: {
            width: 320,
            maxWidth: "80%",
        },
        header: {
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
            paddingBottom: 0,
            paddingTop: 0
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        textContent:{
            paddingTop: 0,
            paddingBottom: 0,
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
        },
        text: {
            wordWrap: "break-word",
            paddingBottom: 0,
            paddingTop: 0,
            margin: 0
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
            position: "static"
        },
    }),
);
