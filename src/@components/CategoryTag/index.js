import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	tag: {
		fontSize: "14px",
		fontWeight: "400",
		textDecoration: "none",
		color: theme.palette.text.main,
		backgroundColor: "#fbc09680",
		borderRadius: ".2rem",
		margin: "0",
		padding: "4px 15px 4px 30px",
		position: "relative",

		"@media (max-width: 1460px)": {
			fontSize: "12px",
			padding: "1px 5px 1px 20px",
		},

		"&.coins": {
			backgroundColor: "#8dd8b266",

			"&:after": {
				backgroundColor: "#31ad31",
			},
		},

		"&.mobile": {
			backgroundColor: "#a9d6f16e",

			"&:after": {
				backgroundColor: "#4e96d4",
			},
		},

		"&:after": {
			position: "absolute",
			top: "50%",
			content: "''",
			left: ".5rem",
			transform: "translateY(-50%)",
			width: ".6rem",
			height: ".6rem",
			backgroundColor: theme.palette.primary.main,
			borderRadius: "50%",
		},
	},
}));

const CategoryTag = ({ link, name, typeClass }) => {
	const classes = useStyle();

	return (
		<Typography
			className={`${classes.tag} ${typeClass}`}
			to={`${link}`}
			component={RouterLink}
		>
			{name}
		</Typography>
	);
};

export default CategoryTag;
