import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            MaxWidth: "100%",
            flexWrap: "nowrap",
        },
        grow: {
            flexGrow: 1,
            flexShrink: 1
        }
    }),
);
