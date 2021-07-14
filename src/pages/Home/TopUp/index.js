import { ProductCard } from "@components";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import React from "react";
import Pubg from "../../../assets/images/pubg.png";

const datas = [
  {
    img: Pubg,
    name: "Pubg Mobile",
  },
  {
    img: Pubg,
    name: "Pubg Mobile",
  },
  {
    img: Pubg,
    name: "Pubg Mobile",
  },
  {
    img: Pubg,
    name: "Pubg Mobile",
  },
  {
    img: Pubg,
    name: "Pubg Mobile",
  },
  {
    img: Pubg,
    name: "Pubg Mobile",
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "initial",
    position: "relative",
    padding: "3.8rem 1.4rem",
    border: "1px solid #ddd",
  },

  heading: {
    position: "absolute",
    top: "-18px",
    backgroundColor: theme.palette.text.light,
    padding: "0 10px",
    left: "5%",
  },

  button: {
    position: "absolute",
    bottom: "-1.3rem",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: theme.palette.text.light,
    padding: "0 .8rem",

    "@media (max-width:560px)": {
      bottom: "-1.4rem",
    },

    "& button": {
      padding: ".3rem 4rem",
      fontSize: "1.2rem",

      "@media (max-width:560px)": {
        padding: ".3rem 2rem",
        fontSize: "1rem",
      },
    },
  },
}));

const TopUp = () => {
  const classes = useStyle();

  return (
    <div>
      <Container maxWidth="xl">
        <Paper className={classes.root} elevation={0}>
          <Typography className={classes.heading} variant="h2">
            Games Top Up
          </Typography>
          <Grid container spacing={10}>
            {datas.map((data, index) => {
              return (
                <Grid key={index} item sm={12} md={6} lg={4} xl={4}>
                  <ProductCard data={data} />
                </Grid>
              );
            })}
          </Grid>
          <div className={classes.button}>
            <Button elevation={0} variant="contained" color="primary">
              Veiw All &nbsp; <DoubleArrowIcon />
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default TopUp;
