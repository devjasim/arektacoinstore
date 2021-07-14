import { makeStyles, Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		textAlign: "center",
	},

	success: {
		width: "4.4rem",
		height: "4.4rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.palette.primary.main,
		borderRadius: "50%",

		margin: "2rem auto 0",

		"& svg": {
			fontSize: "3rem",
			color: "#fff",
		},
	},

	des: {
		marginTop: "3rem",

		"& p": {
			fontSize: "1rem",
			margin: "2rem 0",
		},

		"& h4": {
			fontSize: "1.5rem",
			fontWeight: "400",
		},
	},

	details: {
		width: "100%",
		textAlign: "center",
		"& div:not(:first-child)": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			marginTop: ".3rem",

			"& div": {
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				flexDirection: "row",

				"& h5": {
					fontSize: "1.4rem",
					fontWeight: "500",
				},

				"&:first-child": {
					"& span": {
						fontSize: "1.4rem",
						color: theme.palette.primary.main,
					},
				},

				"& span": {
					display: "inline",
					marginLeft: ".4rem",
					fontSize: "1.4rem",
					fontWeight: "600",
				},
			},
		},

		"& h3": {
			fontSize: "1.2rem",
			fontWeight: "500",
			marginBottom: "1rem",
		},
	},
}));

const LastStep = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.success}>
				<DoneIcon />
			</div>
			<div className={classes.des}>
				<Typography variant="h4">
					Your order has beed received
				</Typography>
				<Typography variant="body1">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Eligendi maiores accusantium inventore itaque, totam
					consectetur quibusdam magnam quos veniam molestias?
					Similique eius quibusdam ut magni facere saepe asperiores
					officiis quas?
				</Typography>
			</div>
			<div className={classes.details}>
				<div>
					<Typography variant="h3">
						Thank you for shopping with us!
					</Typography>
				</div>

				<div>
					<div>
						<Typography variant="h5">Order Number: </Typography>
						<Typography component="span">2243554545</Typography>
					</div>
					<div>
						<Typography variant="h5">Order Date: </Typography>
						<Typography component="span">
							Tuesday, 11 May, 2021
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LastStep;
