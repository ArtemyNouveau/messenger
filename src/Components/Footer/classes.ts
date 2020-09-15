import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
    createStyles({
        toolBar: {
            width: "100%",
            display: "flex",
            flexWrap: "nowrap"
        },
        bottomBar: {
            top: 'auto',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
    }),
);
