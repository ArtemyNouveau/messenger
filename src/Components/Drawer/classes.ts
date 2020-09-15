import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            position: "fixed",
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        hideScrollParent: {
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            padding: 0,
        },
        hideScrollChild: {
            height: "100%",
            position: "absolute",
            overflowY: "scroll",
            overflowX: "hidden",
            paddingRight: 20,
            right: -20,
            left: 0,
            '& > *': {
                width: "calc(100% + 20px)"
            }
        }
    }),
);
