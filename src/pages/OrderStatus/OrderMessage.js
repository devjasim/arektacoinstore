import { PaperPlane } from "@components";
import { Box, Button, Typography } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    backgroundColor: theme.palette.common.softGray,
    borderRadius: "30px",
    padding: "5px 20px",
    border: "none",
    width: "100%",

    "& input": {
      fontSize: "1rem",
      fontWeight: "400",
      paddingLeft: ".8rem !important",
      paddingRight: "6rem",
    },
  },
  iconButton: {
    padding: ".2rem 1rem",
    position: "absolute",
    top: "5px",
    right: "6px",
    width: "6rem",

    "&:hover": {
      "& svg": {
        fill: theme.palette.common.black,
      },
    },

    "& svg": {
      width: "1.6rem",
      height: "1.6rem",
      fill: theme.palette.common.white,
    },
  },
  divider: {
    height: 28,
    margin: 4,
  },

  inputButton: {
    position: "relative",
  },

  messageBody: {
    height: "20rem",
  },
}));

const OrderMessage = () => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <div>
          <Typography variant="h2">Order Message</Typography>
        </div>
        <div className={classes.messageBody}></div>
        <div className={classes.inputButton}>
          <InputBase
            className={classes.input}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Button
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
            variant="contained"
          >
            <PaperPlane />
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default OrderMessage;
