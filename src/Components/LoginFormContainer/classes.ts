import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: 400,
            maxWidth: 400,
            display: 'flex',
            flexWrap: "wrap",
            alignContent: "stretch",
            alignItems: "flex-end",
            justifyContent: "center"
        },
        content: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: "center"
        },
        actions: {
            marginBottom: 20,
            height: "100%"
        }
    }),
);
