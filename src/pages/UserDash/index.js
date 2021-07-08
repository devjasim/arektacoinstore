import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginBottom: "7rem",
		marginTop: "10rem",

		"& .MuiPaper-root": {
			borderRadius: "1.2rem",
		},
	},
}));

const UserDashboard = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Sidebar />
			</Container>
		</div>
	);
};

export default UserDashboard;
