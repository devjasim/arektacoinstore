import { makeStyles } from "@material-ui/core";
import React from "react";
import GoogleLogin from "react-google-login";
import GoogleImage from "../../assets/images/google.png";

const responseGoogle = (response) => {
	console.log(response);
};

const useStyles = makeStyles((theme) => ({
	root: {
		"& button": {
			opacity: "1 !important",
			boxShadow: "0  0 10px rgba(0, 0, 0, .123) !important",
			border: "none !important",
			padding: ".32rem 1rem .32rem .32rem !important",
			cursor: "pointer",
			borderRadius: ".3rem",
			backgroundColor: "#4285f4",
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-start",
			color: theme.palette.common.white,
			fontWeight: "600",
			textTransform: "uppercase",
			width: "15rem",
			height: "3rem",

			"& img": {
				width: "2.5rem",
				height: "2.38rem",
				background: "#fff",
				padding: ".2rem",
				marginRight: "1rem",
				borderRadius: "4px",
			},
		},
	},
}));

const LoginGoogle = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GoogleLogin
				clientId=""
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				className="google_login"
				render={(renderProps) => (
					<button onClick={renderProps.onClick}>
						<img src={GoogleImage} alt="" />
						Login With Google
					</button>
				)}
			/>
		</div>
	);
};

export default LoginGoogle;
