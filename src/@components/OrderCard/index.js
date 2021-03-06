import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		marginBottom: "1.4rem",

		"& > div": {
			"& img": {
				maxWidth: "8rem",
				height: "8rem",
				borderRadius: "15px",
			},
		},
	},

	details: {
		marginBottom: "0",

		"& a": {
			textDecoration: "none",
			fontWeight: "500",
			color: theme.palette.text.main,
		},

		"& p": {
			margin: ".5rem 0",
			color: theme.palette.common.grayColor,
			fontSize: "1rem",
			fontWeight: "400",
			marginBottom: ".2rem",
		},

		"& h4": {
			color: theme.palette.common.grayColor,
			fontSize: "1rem",
			fontWeight: "400",
		},
	},

	plusMinus: {
		display: "flex",
		alignItems: "center",
		marginRight: "1.4rem",

		"& span": {
			fontSize: "16px",
		},

		"& button": {
			width: "2.5rem",
			height: "2.5rem",
			borderRadius: ".4rem",
			padding: ".5rem",
			minWidth: "2.5rem",

			"& span": {
				fontSize: "1.5rem",
				fontWeight: "300",
			},

			"&:first-child": {
				marginLeft: "0",
			},

			"&:last-child": {
				marginRight: "0",
			},
		},
	},

	margin: {
		marginLeft: "2rem",
	},

	trashIcon: {
		width: "1.4rem",
		height: "auto !important",
	},
}));

const OrderCard = ({ data, ...rest }) => {
	const classes = useStyle();

	console.log(data);

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
						</div>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<div>
								<Typography variant="body1">
									Quantity 1
								</Typography>
								<Typography variant="h4">
									Price BDT {data.price}
								</Typography>
							</div>
							<div>
								<Button
									color="primary"
									variant="primary"
									size="small"
								>
									Retrive Code
								</Button>
							</div>
						</Box>
					</Box>
				</Box>
			</div>
		</div>
	);
};

export default OrderCard;
