import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

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

    "& a": {
      textDecoration: "none",
      fontWeight: "500",
      color: theme.palette.text.main,
    },

    "& p": {
      margin: ".5rem 0",
      color: theme.palette.common.grayColor,
      fontSize: "1rem",
      fontWeight: "400",
      marginBottom: ".2rem",
    },

    "& h4": {
      color: theme.palette.common.grayColor,
      fontSize: "1rem",
      fontWeight: "400",
    },
  },

  retriveCode: {
    fontSize: ".9rem",
    padding: ".2rem 1rem",
  },
}));

const OrderCard = ({ data, ...rest }) => {
  const classes = useStyle();

  console.log(data);

  return (
    <div>
      <div className={classes.root}>
        <div>
          <img src={`${data.img}`} alt="" />
        </div>
        <Box flex="1" className={classes.details}>
          <Box marginLeft="1.5rem">
            <div>
              <Typography variant="h3" component={RouterLink}>
                {data.productName}
              </Typography>
            </div>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <div>
                <Typography variant="body1">Quantity 1</Typography>
                <Typography variant="h4">Price BDT {data.price}</Typography>
              </div>
              <div>
                <Button
                  className={classes.retriveCode}
                  color="primary"
                  variant="primary"
                  size="small"
                >
                  Retrive Code
                </Button>
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default OrderCard;
