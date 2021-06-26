import {
	BorderInput,
	CheckoutCard,
	Reviews,
	SupportBox,
	TrustPoint,
} from "@components";
import {
	Box,
	Button,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import ProductImage from "../../assets/images/pubg.png";
import LastStep from "./LastStep";
import PayOptions from "./PayOptions";

const useStyle = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingBottom: `${theme.spacing(5)}rem`,

		"& .MuiStepConnector-alternativeLabel": {
			top: "50%",
			transform: "translateY(-50%)",
			zIndex: "-1",

			"& .MuiStepConnector-lineHorizontal": {
				borderTopWidth: ".6rem",
			},

			"&.MuiStepConnector-active, &.MuiStepConnector-completed": {
				"& .MuiStepConnector-lineHorizontal": {
					borderColor: theme.palette.primary.main,
				},
			},
		},

		"& .MuiStep-alternativeLabel": {
			"&:first-child": {
				"& .MuiStepLabel-iconContainer": {
					position: "relative",
					"&:after": {
						backgroundColor: theme.palette.common.white,
					},
				},
			},
		},

		"& .MuiStepLabel-iconContainer": {
			position: "relative",
			"&:after": {
				content: "''",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: "2rem",
				height: "2rem",
				backgroundColor: "#908f8f",
				borderRadius: "50%",
			},
		},

		"& .MuiStep-completed": {
			"& .MuiStepIcon-root": {
				color: theme.palette.primary.main,
			},

			"& .MuiStepLabel-alternativeLabel": {
				"& .MuiStepLabel-iconContainer": {
					"&:after": {
						backgroundColor: theme.palette.common.white,
					},
				},
			},
		},

		"& .MuiStepConnector-active": {
			"& ~ .MuiStepLabel-alternativeLabel": {
				"& .MuiStepLabel-iconContainer": {
					"&:after": {
						backgroundColor: theme.palette.common.white,
					},
				},
			},
		},

		"& .MuiStepIcon-root": {
			width: "3rem",
			height: "3rem",
			color: "#bdbdbd",

			"&.MuiStepIcon-active": {
				color: theme.palette.primary.main,
			},

			"& .MuiStepIcon-text": {
				fill: "none",
			},
		},

		"& .MuiStepper-root": {
			backgroundColor: "inherit",
			padding: "0 !important",
		},
	},

	placeOrder: {
		padding: "2rem 2.5rem",

		"& button": {
			marginTop: "6rem",
			display: "block",
			width: "100%",
			fontSize: "1.5rem",
			fontWeight: "400",
			borderRadius: "2rem",

			"&.place__order": {
				marginTop: "2rem",
			},
		},
	},

	coupon: {
		marginTop: "2rem",
		textAlign: "center",

		"& h3": {
			marginBottom: "2rem",
		},
	},

	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},

	placeorder: {
		textAlign: "center",
		"& a, span": {
			display: "inline",
			margin: "0 2px",
		},
	},

	seperator: {
		marginTop: "4.5rem",
	},
}));

const data = [
	{
		id: 1,
		img: ProductImage,
		productName: "Cyber Prank",
		price: "45",
		type: "150 Extra Coins",
	},
	{
		id: 2,
		img: ProductImage,
		productName: "Cyber Prank",
		price: "50",
		type: "150 Extra Coins",
	},
];

function getSteps() {
	return [
		"Select master blaster campaign settings",
		"Create an ad group",
		"Create an ad",
	];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		default:
			return "Unknown stepIndex";
	}
}

const Checkout = () => {
	const classes = useStyle();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	// const handleBack = () => {
	// 	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	// };

	const handleReset = () => {
		setActiveStep(0);
	};

	const active = getStepContent(activeStep);

	console.log("active", active);

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<div className={classes.root}>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel></StepLabel>
							</Step>
						))}
					</Stepper>

					<div className={classes.seperator}>
						{activeStep === steps.length ? (
							<div>
								<Typography className={classes.instructions}>
									All steps completed
								</Typography>
								<Button onClick={handleReset}>Reset</Button>
							</div>
						) : (
							<div className={classes.instructions}>
								{active === 1 ? (
									<Fragment>
										<Grid container spacing={10}>
											<Grid item sm={12} md={7}>
												<Paper elevation={3}>
													{data.map((pass) => (
														<CheckoutCard
															key={pass.id}
															data={pass}
														/>
													))}
												</Paper>
											</Grid>

											<Grid item sm={12} md={5}>
												<Paper
													className={
														classes.placeOrder
													}
													elevation={3}
												>
													<Box
														elevation={0}
														display="flex"
														alignItems="center"
														justifyContent="space-between"
													>
														<Typography variant="h2">
															Total
														</Typography>
														<Typography variant="h2">
															BDT 100
														</Typography>
													</Box>
													<Button
														variant="contained"
														color="primary"
														onClick={handleNext}
														variant="contained"
														color="primary"
													>
														Pay Now
													</Button>
												</Paper>

												<Paper
													elevation={3}
													className={classes.coupon}
												>
													<Typography variant="h3">
														Apply Coupon
													</Typography>
													<BorderInput type="text" />
												</Paper>
											</Grid>
										</Grid>
										<SupportBox />
									</Fragment>
								) : active === 2 ? (
									<Fragment>
										<Grid container spacing={10}>
											<Grid item sm={12} md={7}>
												<PayOptions />
											</Grid>

											<Grid item sm={12} md={5}>
												<Paper
													className={
														classes.placeOrder
													}
													elevation={3}
												>
													<Box
														className={
															classes.placeorder
														}
														elevation={0}
													>
														<Typography component="span">
															By clicking "Place
															Order", I
															acknowledge I have
															read and accepted
															the
														</Typography>
														<Typography
															component={
																RouterLink
															}
														>
															Terms and Conditions
														</Typography>
														<Typography component="span">
															including the
														</Typography>
														<Typography
															component={
																RouterLink
															}
														>
															Privacy Policy
														</Typography>
														<Typography component="span">
															and
														</Typography>
														<Typography
															component={
																RouterLink
															}
														>
															Cookies.
														</Typography>
													</Box>
													<Button
														variant="contained"
														color="primary"
														onClick={handleNext}
														variant="contained"
														color="primary"
														className="place__order"
													>
														Place Order
													</Button>
												</Paper>
												<Box
													display="flex"
													justifyContent="flex-end"
													marginTop="2rem"
												>
													<TrustPoint />
												</Box>
											</Grid>
										</Grid>

										<div>
											<Reviews />
										</div>
									</Fragment>
								) : (
									<Grid justify="center" container>
										<Grid item sm={12} md={8}>
											<LastStep />
										</Grid>
									</Grid>
								)}
							</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Checkout;
