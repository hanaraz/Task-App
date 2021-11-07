import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    input: {
        paddingLeft: theme.spacing(18),
        // padding: theme.spacing(2),
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),

    },

    header: {
        paddingTop: theme.spacing(10),
    },



    item: {
        // border: "solid",
        // borderColor: "grey",
        // marginBottom: theme.spacing(1),
        // borderRadius: 30,
        // width: "90%",
        // left: "6rem"
    },

    filter: {
        textAlign: "center",
        margin: theme.spacing(2),



    },


    paper: {
        margin: "auto",
        padding: 10,
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        width: 500
    }

}))