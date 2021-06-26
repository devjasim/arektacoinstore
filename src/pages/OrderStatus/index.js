import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import OrderInfo from "./OrderInfo";
import OrderMessage from "./OrderMessage";
import StatusSteps from "./StatusSteps";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: "4rem",
	},

	paperBox: {
		"& .MuiPaper-root": {
			borderRadius: "1.2rem",
		},
	},
}));

const OrderStatus = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Paper elevation={2}>
					<StatusSteps />
				</Paper>
			</Container>
			<Container>
				<Box className={classes.paperBox} marginTop="4rem">
					<Grid container spacing={10}>
						<Grid item xs={12} md={6}>
							<Paper elevation={2}>
								<OrderInfo />
							</Paper>
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper elevation={2}>
								<OrderMessage />
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default OrderStatus;
