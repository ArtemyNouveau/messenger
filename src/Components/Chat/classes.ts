import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
    createStyles({
        feed: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column-reverse",
            alignContent: "flex-end",
            width: "100%",
            marginBottom: theme.spacing(1)
        },
    }),
);
