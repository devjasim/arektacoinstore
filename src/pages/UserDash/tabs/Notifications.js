import { Notification } from "@components";
import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "@media(min-width: 960px)": {
      padding: "1rem 3rem",
    },

    "& h2": {
      marginBottom: "2rem",
      color: theme.palette.common.textGray,
      fontWeight: "500",
    },
  },
}));

const data = [
  {
    id: 1,
    type: "error",
    text: "Your order cancelled",
  },

  {
    id: 2,
    type: "warning",
    text: "Your order is pending!",
  },

  {
    id: 3,
    type: "info",
    text: "You didn't pay yet.",
  },

  {
    id: 4,
    type: "success",
    text: "Your order successfully delivered!",
  },
];

const Notifications = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2">Notifications</Typography>
      {data.map((eterate) => (
        <Box key={eterate.id}>
          <Notification data={eterate} />
        </Box>
      ))}
    </div>
  );
};

export default Notifications;
