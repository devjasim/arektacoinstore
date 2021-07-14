import { BorderInput } from "@components";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "2rem 0",
    "& h2": {
      textAlign: "center",
      marginBottom: "2rem",
    },

    "& button": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      marginTop: "1rem",
    },

    "& .MuiGrid-item": {
      "& > div": {
        "& label": {
          fontSize: "1rem",
          display: "block",
          fontWeight: "400",
          marginBottom: ".2rem",
          marginLeft: ".5rem",
        },
      },
    },

    "& .MuiInputBase-root": {
      width: "100%",
      marginBottom: "1.5rem",
      "& input": {
        width: "100%",
        fontSize: "1rem",
        fontWeight: "400",
      },
    },
  },
}));

const Settings = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h2">Edit Your Profile</Typography>
        <Grid container justify="center" spacing={4}>
          <Grid item xs="12" lg="6">
            <div>
              <Typography component="label">First Name</Typography>
              <BorderInput id="my-input" aria-describedby="my-helper-text" />
            </div>
            <div>
              <Typography component="label">Last Name</Typography>
              <BorderInput id="my-input" aria-describedby="my-helper-text" />
            </div>
            <div>
              <Typography component="label">Email</Typography>
              <BorderInput id="my-input" aria-describedby="my-helper-text" />
            </div>
            <div>
              <Typography component="label">Phone</Typography>
              <BorderInput id="my-input" aria-describedby="my-helper-text" />
            </div>
          </Grid>
        </Grid>
        <Box textAlign="center">
          <Button color="primary" variant="">
            Save Changes
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Settings;
