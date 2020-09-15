import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        bottomBar: {
            top: 'auto',
            bottom: 0,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            padding: 0
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            marginLeft: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
            minHeight: "100vh"
        },
        chat: {
            height: "100%",
            display: "flex",
            alignContent: "flex-end",
            flexWrap: "wrap"
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
