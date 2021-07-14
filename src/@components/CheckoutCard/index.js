import { Button, makeStyles, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import TrashIcon from "../../assets/images/trash.png";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "1.4rem",

    "& > div": {
      "& img": {
        maxWidth: "8rem",
        height: "8rem",
        borderRadius: "15px",
      },
    },
  },

  details: {
    marginBottom: "0",
    marginLeft: "2.5rem",

    "& a": {
      textDecoration: "none",
      fontWeight: "500",
      color: theme.palette.text.main,
    },

    "& p": {
      margin: ".5rem 0",
    },

    "& h4": {
      textTransform: "uppercase",
    },

    "& div:last-child": {
      marginLeft: "2.5rem",
    },
  },

  plusMinus: {
    display: "flex",
    alignItems: "center",
    marginRight: "1.4rem",

    "& span": {
      fontSize: "16px",
    },

    "& button": {
      width: "2rem",
      height: "2rem",
      borderRadius: ".4rem",
      padding: ".5rem",
      minWidth: "2rem",
      margin: "0 1rem",

      "& span": {
        fontSize: "1.5rem",
        fontWeight: "300",
      },

      "&:first-child": {
        marginLeft: "0",
      },

      "&:last-child": {
        marginRight: "0",
      },
    },
  },

  margin: {
    marginLeft: "2rem",
  },

  trashIcon: {
    width: "1.2rem",
    height: "auto !important",
  },
}));

const ChecoutCard = ({ data, ...rest }) => {
  const classes = useStyle();

  console.log(data);

  return (
    <div className={classes.root}>
      <div>
        <img src={`${data.img}`} alt="" />
      </div>
      <div className={`${classes.root} ${classes.details}`}>
        <div>
          <Typography variant="h3" component={RouterLink}>
            {" "}
            {data.productName}{" "}
          </Typography>
          <Typography variant="body1"> {data.type} </Typography>
          <Typography variant="h4">BDT {data.price} </Typography>
        </div>
        <div className={classes.root}>
          <div className={classes.plusMinus}>
            <Button>-</Button>
            <Typography component="span">3</Typography>
            <Button>+</Button>
          </div>
          <IconButton aria-label="delete" className={classes.margin}>
            <img className={classes.trashIcon} src={TrashIcon} alt="" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ChecoutCard;
