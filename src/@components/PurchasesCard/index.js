import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		marginBottom: ".8rem",

		"& > div": {
			"& img": {
				maxWidth: "4rem",
				height: "4rem",
				borderRadius: "15px",
			},
		},
	},

	details: {
		marginBottom: "0",

		"& a": {
			textDecoration: "none",
			fontWeight: "400",
			color: theme.palette.common.textGray,
			fontSize: ".9rem",
			marginBottom: ".4rem",
			lineHeight: "1rem",
			display: "block",
		},

		"& p": {
			margin: "0rem",
			color: theme.palette.common.grayColor,
			fontSize: ".9rem",
			fontWeight: "400",
			lineHeight: "1rem",
		},

		"& h4": {
			color: theme.palette.common.grayColor,
			fontSize: "1rem",
			fontWeight: "400",
		},
	},
}));

const PurchacesCard = ({ data, ...rest }) => {
	const classes = useStyle();
	return (
		<div>
			<div className={classes.root}>
				<div>
					<img src={`${data.img}`} alt="" />
				</div>
				<Box flex="1" className={classes.details}>
					<Box marginLeft="1.5rem">
						<div>
							<Typography variant="h3" component={RouterLink}>
								{data.productName}
							</Typography>
							<Typography variant="body1">
								{" "}
								{data.productDes}{" "}
							</Typography>
						</div>
					</Box>
				</Box>
			</div>
		</div>
	);
};

export default PurchacesCard;
