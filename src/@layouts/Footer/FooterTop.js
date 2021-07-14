import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Bkash from "../../assets/images/bkash-logo.png";
import Nogod from "../../assets/images/nagad-logo.png";
import Rocket from "../../assets/images/rocket-logo.png";

const useStyle = makeStyles((theme) => ({
	root: {
		borderBottom: "2px solid #ddd",
		padding: `${theme.spacing(3)}rem 0`,
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		flexWrap: "wrap",

		"& div": {
			margin: `0 ${theme.spacing(2)}rem`,

			"&:first-child": {
				marginLeft: "0",
			},

			"& h5": {
				fontSize: "1.5rem",
				fontWeight: "300",
			},

			"& img": {
				maxWidth: "5rem",
			},
		},
	},
}));

function FooterTop() {
	const classes = useStyle();

	return (
		<Container maxWidth="xl">
			<div className={classes.root}>
				<div>
					<Typography variant="h5">Payment method:</Typography>
				</div>
				<div>
					<img src={Bkash} alt="" />
				</div>
				<div>
					<img src={Nogod} alt="" />
				</div>
				<div>
					<img src={Rocket} alt="" />
				</div>
			</div>
		</Container>
	);
}

export default FooterTop;
