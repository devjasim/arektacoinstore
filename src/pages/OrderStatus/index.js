import {
	Box,
	Button,
	Container,
	Grid,
	makeStyles,
	Paper,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import React from "react";
import OrderInfo from "./OrderInfo";
import OrderMessage from "./OrderMessage";
import StatusSteps from "./StatusSteps";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: "3.5rem",
	},

	tiemrButton: {
		"& span": {
			fontSize: "1.2rem",
			fontWeight: "600",
			"& svg": {
				fontSize: "1.8rem !important",
			},
		},
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

				<Box marginTop="3.5rem" textAlign="center">
					<Button
						className={classes.tiemrButton}
						size="large"
						startIcon={<AccessTimeIcon />}
						variant="contained"
						color="primary"
					>
						Processing Timer 29:00
					</Button>
				</Box>

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
