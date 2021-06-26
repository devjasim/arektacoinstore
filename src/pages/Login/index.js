import { BorderInput, LoginFacebook, LoginGoogle } from "@components";
import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		paddingBottom: "6rem",

		"& a": {
			color: `${theme.palette.primary.main}`,
		},

		"& .MuiPaper-root": {
			padding: "3rem",
		},

		"& .MuiFormControl-root": {
			width: "100%",
			display: "block",
			marginBottom: "1.5rem",
		},

		"& .MuiInputBase-root": {
			width: "100%",
		},

		"& input": {
			display: "block",
			width: "100%",
			boxSizing: "border-box",
		},
	},

	size: {
		maxWidth: "80%",
		margin: "0 auto",

		"@media (max-width: 560px)": {
			maxWidth: "100%",
		},
	},

	socialButton: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: "2rem",
		textAlign: "center",

		"& > div": {
			margin: "0 0 1rem 0",
		},
	},

	buttons: {
		textAlign: "center",

		"& button": {
			display: "block",
			width: "100%",
			margin: "1.5rem 0 1rem 0",
		},

		"& .MuiBox-root": {
			justifyContent: "space-between !important",
			flexWrap: "wrap",
		},

		"& div": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			margin: "0 !important",

			"& span": {
				fontSize: "18px",
			},

			"& a": {
				fontSize: "16px",
				fontWeight: "500",
				marginLeft: ".2rem",
			},
		},

		"& a": {
			display: "block",
			margin: "0",
		},
	},
}));

const Login = () => {
	const classes = useStyles();

	const [state, setState] = React.useState({
		checkedA: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container alignItems="center" justify="center">
					<Grid item xs={12} sm={8} md={6}>
						<Paper>
							<div className={classes.size}>
								<form action="">
									<div className={classes.socialButton}>
										<LoginFacebook />
										<LoginGoogle />
									</div>
									<div>
										<BorderInput
											placeholder="Email"
											type="email"
										/>
										<BorderInput
											placeholder="Password"
											type="password"
										/>
									</div>
									<div className={classes.buttons}>
										<Box
											display="flex"
											alignItems="center"
											justifyContent="space-between"
										>
											<Typography
												component={RouterLink}
												to="/"
											>
												Forgote Password?
											</Typography>
											<FormControlLabel
												control={
													<Checkbox
														checked={state.checkedB}
														onChange={handleChange}
														name="checkedA"
														color="primary"
													/>
												}
												label="Remember Me"
											/>
										</Box>
										<Button>Sign In</Button>
										<div>
											<Typography component="span">
												or
											</Typography>
											<Typography
												component={RouterLink}
												to="/register"
											>
												Create New Account
											</Typography>
										</div>
									</div>
								</form>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Login;
