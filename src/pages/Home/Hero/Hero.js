import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Typed from "react-typed";
const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "40px",
    borderRadius: "1.8rem",
    minHeight: "calc(90vh - 8rem)",

    "@media (min-width: 768px)": {
      padding: "5rem 2.5rem",
    },

    "& h1": {
      fontSize: "3rem",
      fontWeight: "700",
      color: theme.palette.text.light,
      textAlign: "center",
    },
  },

  introDesign: {
    fontSize: "1.5rem",
    color: theme.palette.text.light,
    margin: `${theme.spacing(1)}rem auto`,
    fontWeight: "300",
    textAlign: "center",
  },

  inputField: {
    marginTop: "2.5rem",
    "& div": {
      position: "relative",

      "& div.avatar": {
        width: "55px",
        height: "55px",
        boxSizing: "border-box",
        border: "5px white solid",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
        animation: "$float 4s ease-in-out infinite",
        marginRight: "1rem",
        position: "absolute",
        top: "-20px",
        left: "0",
      },

      "& input": {
        width: "100%",
        height: "2.5rem",
        fontSize: "20px",
        color: theme.palette.secondary.light,
        border: "none",
        borderBottom: "3px solid",
        borderBottomColor: theme.palette.secondary.light,
        background: "none",
        position: "relative",
        transform: "translatey(0px)",
        borderRadius: "0",
        padding: "15px 0",
        paddingLeft: "70px",

        "&:focus-visible": {
          outline: "none",
          boxShadow: "none",
          animation: "none",
          transform: "none",
        },

        "&::placeholder": {
          color: theme.palette.text.light,
        },

        "&:focus": {
          "& + i": {
            opacity: 0,
          },
        },

        "&::after": {
          content: "''",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "1px",
          width: "3px",
          backgroundColor: theme.palette.secondary.light,
          height: "30px",
          animation: `$cursorEffect 1500ms infinite ${theme.transitions.easing.easeInOut}`,
        },
      },
    },
  },

  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  "@keyframes cursorEffect": {
    from: {
      height: "30px",
    },
    "50%": {
      height: "0",
    },
  },

  "@keyframes float": {
    "0%": {
      // boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translatey(0px)",
    },
    "50% ": {
      // boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
      transform: "translatey(-20px)",
    },
    "100%": {
      // boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
      transform: "translatey(0px)",
    },
  },
}));

const Hero = () => {
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <Grid justify="center" container>
        <Grid item sm={12} md={10} xl={9}>
          <Typography variant="h1">
            “There's a thin line between life and death. Find me there.”
          </Typography>
          <Typography className={classes.introDesign} variant="h4">
            -Wraith, Apex Legends.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <div className={classes.inputField}>
            <form noValidate autoComplete="off">
              <div className={classes.flex}>
                <div class="avatar">
                  <a href="https://codepen.io/MarioDesigns/">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
                      alt="Skytsunami"
                    />
                  </a>
                </div>
                <Box flex="1">
                  <Typed
                    strings={["Search for products"]}
                    typeSpeed={80}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                  >
                    <input type="text" />
                  </Typed>
                </Box>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;
