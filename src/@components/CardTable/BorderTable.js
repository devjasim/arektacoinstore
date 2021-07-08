import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import LoopIcon from "@material-ui/icons/Loop";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import React from "react";

const columns = [
	{
		id: 1,
		label: "Date",
	},
	{
		id: 2,
		label: "Order ID",
	},
	{
		id: 3,
		label: "Status",
	},
	{
		id: 4,
		label: "Amount",
	},
];

const rows = [
	{
		id: 1,
		date: "12 May 2021",
		orderId: "#234234",
		status: "completed",
		amount: "$13",
	},
	{
		id: 2,
		date: "12 May 2021",
		orderId: "#234234",
		status: "failed",
		amount: "$13",
	},
	{
		id: 3,
		date: "12 May 2021",
		orderId: "#234234",
		status: "processing",
		amount: "$13",
	},
	{
		id: 4,
		date: "12 May 2021",
		orderId: "#234234",
		status: "cancelled",
		amount: "$13",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",

		"& table": {
			"& th": {
				fontSize: "1rem",
				fontWeight: "400",
				color: theme.palette.common.textGray,
			},

			"& .MuiTableCell-root": {
				borderBottom: "none",

				"&:first-child": {
					borderTopLeftRadius: ".4rem",
					borderBottomLeftRadius: ".4rem",
				},
				"&:last-child": {
					borderTopRightRadius: ".4rem",
					borderBottomRightRadius: ".4rem",
				},
			},
		},

		"& thead": {
			"& tr": {
				"& th": {
					textAlign: "center",

					"&:last-child": {
						textAlign: "right",
					},

					"&:first-child": {
						textAlign: "left",
					},
				},
			},
		},

		"& .MuiTableBody-root": {
			"& .MuiTableRow-root": {
				backgroundColor: "none",

				"& .MuiTableCell-body": {
					fontSize: "1rem",
					borderBottom: "2.5px solid",
					borderBottomColor: theme.palette.common.softGray,
					borderRadius: "0",

					"& span": {
						fontSize: "1rem",
						fontWeight: "300",
					},

					"&:nth-child(2)": {
						color: `${theme.palette.primary.main} !important`,
						opacity: ".9",
					},

					"&:nth-last-of-type(2)": {
						"& span": {
							fontSize: "1rem",
							fontWeight: "400",
						},
					},

					"&:last-child": {
						fontSize: "1.1rem",
					},
				},
			},
		},
	},
	container: {
		maxHeight: 440,
	},

	statusName: {
		display: "block",
		width: "100%",
		textAlign: "center",
		fontSize: "1rem",
		color: theme.palette.text.main,
	},

	statusIcon: {
		"& svg.check": {
			color: "#34b101",
		},
		"& svg.failed": {
			color: " #ff8471",
		},
		"& svg.loop": {
			color: theme.palette.primary.main,
		},
		"& svg.cross": {
			color: "#fff",
			backgroundColor: "red",
			borderRadius: "50%",
		},
	},
}));

const BorderTable = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell>{column.label}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => {
							return (
								<TableRow
									hover
									role="checkbox"
									tabIndex={-1}
									key={row.id}
								>
									<TableCell>{row.date}</TableCell>
									<TableCell align="center">
										{row.orderId}
									</TableCell>
									<TableCell align="center">
										<Box
											display="flex"
											alignItems="center"
											justifyContent="space-between"
											maxWidth="120px"
											margin="0 auto"
											className={classes.statusIcon}
										>
											{row.status === "completed" ? (
												<CheckCircleIcon className="check" />
											) : row.status === "cancelled" ? (
												<HighlightOffIcon className="cross" />
											) : row.status === "processing" ? (
												<LoopIcon className="loop" />
											) : row.status === "failed" ? (
												<SmsFailedIcon className="failed" />
											) : null}
											<Typography
												className={classes.statusName}
												component="span"
											>
												{row.status}
											</Typography>
										</Box>
									</TableCell>
									<TableCell align="right">
										{row.amount}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default BorderTable;
