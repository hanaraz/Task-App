import { makeStyles } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    container: {
        minHeight: "100vh",
        position: "relative",
        padding: theme.spacing(5),
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
    },

    header: {
        margin: theme.spacing(2, 0, 4, 0),
    },

    task: {
        position: "relative",
        marginBottom: theme.spacing(1)
    },

    deleteBtn: {
        position: "absolute",
        right: 0
    },

    select: {
        margin: theme.spacing(1, 0, 3, 0),
    }
}))

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
    },
});