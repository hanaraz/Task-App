import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    input: {
        paddingLeft: theme.spacing(18),
        padding: theme.spacing(2),
        margin: theme.spacing(3),
    },

    header: {
        paddingTop: theme.spacing(10),
    },

    btnTask: {
        left: "8rem"
    },

    item: {
        // border: "solid",
        // borderColor: "grey",
        marginBottom: theme.spacing(1),
        // borderRadius: 30,
        width: "90%",
        left: "6rem"
    },

    filterButtons: {
        paddingLeft: theme.spacing(15),
        marginTop: theme.spacing(5),



    },

}))