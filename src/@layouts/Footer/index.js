import { makeStyles } from "@material-ui/core";
import React from "react";
import FooterBootm from "./FooterBootm";
import Footers from "./Footers";
import FooterTop from "./FooterTop";

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.secondary.light,
	},
}));

const Footer = () => {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<FooterTop />
			<Footers />
			<FooterBootm />
		</div>
	);
};

export default Footer;
