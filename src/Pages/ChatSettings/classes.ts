import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '100%',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        card: {
            display: 'flex',
            justifyContent: "space-between",
            flexWrap: "wrap"
        },
        controllers: {
            width: "100%"
        },
        details: {
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
    }),
);
