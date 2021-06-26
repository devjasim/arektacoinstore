import { makeStyles, Typography } from "@material-ui/core";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	arrowBtn: {
		borderRadius: "50%",
		backgroundColor: theme.palette.primary.main,
		width: "3rem",
		height: "3rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		"& svg": {
			fontSize: "2rem",
			color: theme.palette.text.light,
		},
	},
}));

const ArrowButton = (link) => {
	const classes = useStyle();

	return (
		<Typography
			className={classes.arrowBtn}
			to={`${link}`}
			component={RouterLink}
		>
			<ArrowRightAlt />
		</Typography>
	);
};

export default ArrowButton;
