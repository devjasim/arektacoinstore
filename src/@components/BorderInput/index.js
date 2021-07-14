import { makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const CustomInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},

	"& .MuiFormControl-root": {
		width: "100%",
	},

	input: {
		borderRadius: "1.9rem",
		position: "relative",
		backgroundColor: theme.palette.common.white,
		border: ".1rem solid #dcd5d5",
		fontSize: 14,
		width: "auto",
		padding: ".8rem 1.5rem",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		boxSizing: "border-box",
		minHeight: "2.5rem",
		maxHeight: "2.7rem",

		"&:focus": {
			borderColor: theme.palette.primary.main,
			borderHeight: ".18rem",
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		display: "block",
	},
}));

const BorderInput = ({ placeholder, type }) => {
	const classes = useStyles();

	return (
		<FormControl className={classes.root}>
			<CustomInput
				autoComplete="false"
				placeholder={placeholder}
				type={type}
				id="bootstrap-input"
			/>
		</FormControl>
	);
};

export default BorderInput;
