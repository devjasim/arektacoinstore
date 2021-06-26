import { Typography } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	review: {
		"& li": {
			"& > p": {
				display: "flex",
				alignItems: "center",
				margin: "0 0 10px 0",
				color: "#2daf2b",
				fontSize: "1.5rem",

				"& svg": {
					fontSize: "2rem",
					padding: ".1rem",
					marginRight: ".3rem",
					color: "#2daf2b",
				},
			},

			"& > div": {
				"& svg": {
					backgroundColor: "#2daf2b",
					borderRadius: "5px",
					fontSize: "2.5rem",
					padding: ".1rem",
					marginRight: ".3rem",
					color: theme.palette.text.light,
				},
			},

			"& h2": {
				fontSize: "3rem",
				lineHeight: "3rem",
			},

			"& span": {
				marginLeft: "4.8rem",
				fontSize: "1.2rem",
			},
		},
	},
}));

const TrustPoint = () => {
	const classes = useStyles();

	return (
		<ul className={classes.review}>
			<li>
				<Typography variant="body1">
					<GradeIcon />
					Trustpilot
				</Typography>
				<div>
					<GradeIcon />
					<GradeIcon />
					<GradeIcon />
					<GradeIcon />
					<GradeIcon />
				</div>
				<Typography variant="h2">Excellent</Typography>
				<Typography component="span">Reviews 4,317</Typography>
			</li>
		</ul>
	);
};

export default TrustPoint;
