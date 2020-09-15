import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: "center",
        },
        inputField: {
            margin: 8,
        }
    }),
);
