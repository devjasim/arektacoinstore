import { ArrowButton, CategoryTag, Ratings } from "@components";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexWrap: "wrap",
	},

	img: {
		"& img": {
			maxWidth: "160px",
			maxHeight: "170px",
			borderRadius: "1rem",

			"@media (max-width:1460px)": {
				maxWidth: "130px",
				maxHeight: "130px",
			},
		},
	},

	info: {
		marginLeft: "2rem",
		flex: 1,
		"& div": {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			margin: "1rem 0",
			flexWrap: "wrap",
			marginBottom: "0 !important",

			"& a": {
				marginBottom: "5px",
			},

			"& a:first-child": {
				marginRight: "1rem",
			},
		},
	},
}));

const ProductCard = ({ data }) => {
	const classes = useStyle();

	return (
		<Paper className={classes.root} elevation={1}>
			<div className={classes.img}>
				<img src={data.img} alt="" />
			</div>
			<div className={classes.info}>
				<Typography variant="h3">{data.name}</Typography>
				<div>
					<CategoryTag link="/" name="Mobile" typeClass="mobile" />
					<CategoryTag link="/" name="Coins" typeClass="coins" />
				</div>
				<div>
					<Ratings rate="4" />
					<ArrowButton />
				</div>
			</div>
		</Paper>
	);
};

export default ProductCard;
