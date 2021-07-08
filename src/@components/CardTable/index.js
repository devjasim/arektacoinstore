import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const columns = [
	{
		id: 1,
		label: "Order Id",
	},
	{
		id: 2,
		label: "Product name",
	},
	{
		id: 3,
		label: "Redeem code",
	},
	{
		id: 4,
		label: "Date",
	},
];

const rows = [
	{
		id: 1,
		orderId: "#23423423",
		productName: "Steam wallet $5",
		redeemCode: "qwerwr-asdfwr",
		date: "11 May, 2021 - 11: 00 PM",
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
					background: "none",

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
				backgroundColor: "rgba(0, 0, 0, 0.04)",

				"& .MuiTableCell-body": {
					fontSize: "1rem",

					"& span": {
						fontSize: "1rem",
						fontWeight: "300",
					},

					"&:first-child": {
						color: `${theme.palette.primary.main} !important`,
						opacity: ".9",
					},

					"&:nth-last-of-type(2)": {
						"& span": {
							backgroundColor: theme.palette.common.lightGray,
							padding: ".5rem 1rem",
							borderRadius: ".2rem",
						},
					},

					"&:last-child": {
						fontSize: ".8rem",
					},
				},
			},
		},
	},
	container: {
		maxHeight: 440,
	},
}));

const CardTable = () => {
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
									<TableCell>{row.orderId}</TableCell>
									<TableCell align="center">
										{row.productName}
										{row.img}
									</TableCell>
									<TableCell align="center">
										<Typography component="span">
											{row.redeemCode}
										</Typography>
									</TableCell>
									<TableCell align="right">
										{row.date}
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

export default CardTable;
