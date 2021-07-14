import { BorderInput } from "@components";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Bkash from "../../../assets/images/bkash-logo.png";
import Nogod from "../../../assets/images/nagad-logo.png";
import Rocket from "../../../assets/images/rocket-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    "& .MuiAccordion-root": {
      borderRadius: ".8rem",
      border: "none",
      padding: ".8rem 2rem",
      paddingBottom: "0",
      marginBottom: "1.5rem",

      "&:before": {
        content: "none",
      },

      "& .MuiCollapse-container": {
        paddingTop: "10px",
        borderTop: "1px solid transparent",
        transition: ".4s all ease-in-out",
        marginBottom: "20px",
      },

      "& .MuiCollapse-entered": {
        paddingTop: ".8rem",
        borderTop: "1px solid #ddd",
      },
    },

    "& .MuiAccordionSummary-content": {
      justifyContent: "space-between",

      "& .MuiFormControlLabel-label": {
        fontSize: "1.2rem",
        fontWeight: "500",
      },

      "& img": {
        width: "90px",
        height: "50px",
        height: "auto",
        padding: "10px",
        borderRadius: "5px",
      },

      "& img.bkash": {
        backgroundColor: "#ecb1cb",
      },
      "& img.rocket": {
        backgroundColor: "#8c3494",
        padding: "0",
      },
      "& img.nogod": {
        backgroundColor: "#fbabae",
      },
    },
  },

  content: {
    "& p": {
      marginBottom: ".8rem",
    },

    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: ".8rem",
      "& h5": {
        color: theme.palette.secondary.main,
      },

      "&:nth-child(3)": {
        "& span": {
          color: theme.palette.primary.main,
        },
      },

      "&:nth-child(4)": {
        justifyContent: "space-around",
        textAlign: "center",
        marginTop: "2rem",
        marginBottom: "1.5rem",

        "& input": {
          width: "100%",
          display: "block",
          marginTop: "5px",
        },
      },

      "& span": {
        dislay: "block",
        marginLeft: ".8rem",
        fontSize: "1.2rem",
        fontWeight: "600",
      },
    },
  },
}));

const Content = ({ number, accountType }) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography variant="body1" color="textSecondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sequi ad
        ea laudantium quasi consequatur! Molestiae praesentium accusamus ipsum
        debitis ratione ex, fuga provident mollitia eveniet quis incidunt?
        Quisquam, velit!
      </Typography>

      <div>
        <Typography variant="h5">You need to pay: </Typography>
        <Typography component="span"> 2280</Typography>
      </div>

      <div>
        <Typography variant="h4">Our Bkash Number: </Typography>
        <Typography component="span">214294712947</Typography>
      </div>

      <div>
        <div>
          <label htmlFor="number">Sender's bkash number</label>
          <BorderInput type="text" />
        </div>
        <div>
          <label htmlFor="number">Transection ID</label>
          <BorderInput type="text" />
        </div>
      </div>
    </div>
  );
};

export default function PayOptions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded={true} elevation={3}>
        <AccordionSummary
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="BKash"
          />
          <img className="bkash" src={Bkash} alt="" />
        </AccordionSummary>
        <AccordionDetails>
          <Content number="240242424" accountType="BKash" />
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={3}>
        <AccordionSummary
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="Nagad"
          />
          <img className="nogod" src={Nogod} alt="" />
        </AccordionSummary>
        <AccordionDetails>
          <Content number="240242424" accountType="BKash" />
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={3}>
        <AccordionSummary
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="Rocket"
          />
          <img className="rocket" src={Rocket} alt="" />
        </AccordionSummary>
        <AccordionDetails>
          <Content number="240242424" accountType="BKash" />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
