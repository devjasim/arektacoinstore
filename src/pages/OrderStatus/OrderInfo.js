import { OrderCard } from "@components";
import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ProductImage from "../../assets/images/pubg.png";

const data = [
	{
		id: 1,
		img: ProductImage,
		productName: "Cyber Prank",
		price: "45",
		type: "150 Extra Coins",
	},
	{
		id: 2,
		img: ProductImage,
		productName: "Cyber Prank",
		price: "50",
		type: "150 Extra Coins",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	accountInfo: {
		"& ul": {
			"& li": {
				padding: ".2rem 0",
				"& span": {
					color: theme.palette.common.textGray,
					"&:first-child": {
						marginRight: ".3rem",
					},
				},
			},
		},
	},
}));

const OrderInfo = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{data.map((data) => (
				<OrderCard key={data.id} data={data} />
			))}

			<Box className={classes.accountInfo} marginLeft="9.5rem">
				<ul>
					<li>
						<Typography component="span">Plateform:</Typography>
						<Typography component="span">Mobile</Typography>
					</li>
					<li>
						<Typography component="span">Server:</Typography>
						<Typography component="span">ASIA</Typography>
					</li>
					<li>
						<Typography component="span">UID:</Typography>
						<Typography component="span">818123123</Typography>
					</li>
					<li>
						<Typography component="span">
							Character Nickname:
						</Typography>
						<Typography component="span">Sofia</Typography>
					</li>
					<li>
						<Typography component="span">Email:</Typography>
						<Typography component="span">Sofiabeer</Typography>
					</li>
					<li>
						<Typography component="span">Password:</Typography>
						<Typography component="span">Apiper2829</Typography>
					</li>
				</ul>
			</Box>
		</div>
	);
};

export default OrderInfo;
