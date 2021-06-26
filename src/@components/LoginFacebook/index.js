import { makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const useStyles = makeStyles((theme) => ({
	facebookButton: {
		"& button": {
			border: "none",
			cursor: "pointer",
			margin: "0",
			borderRadius: ".3rem",
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-start",
			color: theme.palette.common.white,
			padding: "0px 10px 0px 0px",
			fontSize: ".9rem",
			fontWeight: "600",
			background: "#406dd6",
			textTransform: "uppercase",
			width: "15rem",
			height: "3rem",
		},
		"& svg": {
			color: "#ffffff",
			fontSize: "3rem",
			marginRight: ".5rem",
		},
	},
}));

const responseFacebook = (response) => {
	console.log(response);
};

const LoginFacebook = () => {
	const classes = useStyles();

	return (
		<div className={classes.facebookButton}>
			<FacebookLogin
				// 	appId="1088597931155576"
				// 	autoLoad
				callback={responseFacebook}
				render={(renderProps) => (
					<button onClick={renderProps.onClick}>
						<FacebookIcon /> Login WIth Facebook
					</button>
				)}
			/>
		</div>
	);
};

export default LoginFacebook;
