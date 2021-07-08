import { PurchacesCard } from "@components";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ProductImage from "../../../assets/images/pubg.png";

const data = [
	{
		id: 1,
		img: ProductImage,
		productName: "Cyber Prank",
		productDes: "Lorem ipsum dolor sit amet.",
	},
	{
		id: 2,
		img: ProductImage,
		productName: "Cyber Prank",
		productDes: "Lorem ipsum dolor sit amet.",
	},
	{
		id: 3,
		img: ProductImage,
		productName: "Cyber Prank",
		productDes: "Lorem ipsum dolor sit amet.",
	},
	{
		id: 4,
		img: ProductImage,
		productName: "Cyber Prank",
		productDes: "Lorem ipsum dolor sit amet.",
	},
	{
		id: 5,
		img: ProductImage,
		productName: "Cyber Prank",
		productDes: "Lorem ipsum dolor sit amet.",
	},
	{
		id: 6,
		img: ProductImage,
		productName: "Cyber Prank",
		productDes: "Lorem ipsum dolor sit amet.",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "3rem",
		width: "100%",
	},

	status: {
		"& div": {
			textAlign: "center",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",

			"& div": {
				textAlign: "center",
				"&:first-child": {
					borderRadius: ".8rem",
					backgroundColor: theme.palette.primary.main,
					padding: "2rem",
					width: "2.4rem",
					height: "2.4rem",
					marginBottom: ".5rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},

				"& h5": {
					fontSize: ".9rem",
					color: theme.palette.text.light,
				},

				"& h4": {
					fontSize: "1rem",
					fontWeight: "500",
				},
			},
		},
	},
}));

const Overview = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="flex-start"
				flexWrap="wrap"
				marginBottom="2rem"
				className={classes.status}
			>
				<div>
					<div>
						<Typography variant="h5">0</Typography>
					</div>
					<div>
						<Typography variant="h4">Processing</Typography>
					</div>
				</div>
				<div>
					<div>
						<Typography variant="h5">0</Typography>
					</div>
					<div>
						<Typography variant="h4">Failed</Typography>
					</div>
				</div>
				<div>
					<div>
						<Typography variant="h5">0</Typography>
					</div>
					<div>
						<Typography variant="h4">Cancelled</Typography>
					</div>
				</div>
				<div>
					<div>
						<Typography variant="h5">0</Typography>
					</div>
					<div>
						<Typography variant="h4">Refunded</Typography>
					</div>
				</div>
				<div>
					<div>
						<Typography variant="h5">0</Typography>
					</div>
					<div>
						<Typography variant="h4">Completed</Typography>
					</div>
				</div>
			</Box>
			<Box>
				<Grid container spacing={3}>
					{data.map((datas) => (
						<Grid key={datas.id} item xs={12} sm={6} lg={4} xl={4}>
							<PurchacesCard data={datas} />
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

export default Overview;
