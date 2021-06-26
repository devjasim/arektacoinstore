import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		padding: `${theme.spacing(1)}rem 0`,
		textAlign: "center",

		"& p": {
			fontSize: "18px",
			fontWeight: "300",
			color: theme.palette.text.light,
		},
	},
}));

function FooterBootm() {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<Container maxWidth="xl">
				<Typography varinat="body2">
					Copyright 2020 - ArektaCoinStore | All Rights Reserved
				</Typography>
			</Container>
		</div>
	);
}

export default FooterBootm;
