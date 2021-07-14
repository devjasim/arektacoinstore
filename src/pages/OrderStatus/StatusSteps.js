import { CartIcon, ConfirmIcon, ProcessingIcon, TakaIcon } from "@components";
import { Typography } from "@material-ui/core";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    "& .MuiStepper-root": {
      padding: ".5rem 0 0 0 ",
    },

    "& .MuiStep-root": {
      "& .MuiStepConnector-lineHorizontal": {
        borderTopWidth: "3px",
      },

      "& .MuiStepConnector-alternativeLabel": {
        top: "2.15rem",
        left: "calc(-50% + 40px)",
        right: "calc(50% + 40px)",
      },

      "& .MuiStepConnector-active": {
        "& .MuiStepConnector-lineHorizontal": {
          borderColor: theme.palette.primary.main,
        },
      },
      "& .MuiStepConnector-completed": {
        "& .MuiStepConnector-lineHorizontal": {
          borderColor: theme.palette.primary.main,
        },
      },
    },
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  time: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#a0a0a0",
  },
}));

function getSteps() {
  return [
    {
      id: 1,
      title: "Order Placed",
      intro: "2021-06-21 10:00:40",
    },
    {
      id: 2,
      title: "Payment Verified",
      intro: "2021-06-21 10:00:40",
    },
    {
      id: 3,
      title: "Processing",
      intro: "2021-06-21 10:00:40",
    },
    {
      id: 4,
      title: "Completed",
      intro: "2021-06-21 10:00:40",
    },
  ];
}

const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    zIndex: 1,
    color: "#fff",
    border: "3px solid",
    borderColor: theme.palette.common.grayColor,
    display: "flex",
    borderRadius: "14px",
    justifyContent: "center",
    alignItems: "center",
    padding: ".8rem",

    "& svg": {
      fill: theme.palette.common.grayColor,
      width: "2rem",
      height: "2rem",
    },
  },
  active: {
    borderColor: theme.palette.primary.main,
    "& svg": {
      fill: theme.palette.primary.main,
    },
  },
  completed: {
    borderColor: theme.palette.primary.main,
    "& svg": {
      fill: theme.palette.primary.main,
    },
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <CartIcon />,
    2: <TakaIcon />,
    3: <ProcessingIcon />,
    4: <ConfirmIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

export default function StatusSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(4);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label.id}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {label.title}
              <Typography className={classes.time} variant="body1">
                {label.intro}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
