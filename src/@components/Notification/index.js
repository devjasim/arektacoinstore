import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "1rem",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },

    "& .MuiPaper-root": {
      borderRadius: ".3rem !important",
    },
  },
}));

function Notification({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={data.type}> {data.text} </Alert>
    </div>
  );
}
export default Notification;
