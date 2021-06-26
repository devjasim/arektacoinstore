import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import PubgMobile from "../../assets/images/pubg.png";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: "2rem",
		"& .MuiPaper-root": {
			"& > .MuiBox-root": {
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "flex-start",
				flexWrap: "wrap",

				"& > div": {
					width: "130px",
					margin: "0 1rem 1rem",
					textAlign: "center",
				},

				"& img": {
					width: "7rem",
					borderRadius: ".8rem",
					height: "initial",
					objectFit: "cover",
					marginBottom: ".5rem",
				},
			},
		},
	},

	cardTitle: {
		display: "flex",
		alignItems: "center",
		paddingBottom: "1rem",
		borderBottom: "1px solid #ddd",
		margin: "0 1rem 1.5rem 1rem",

		"& h6": {
			fontWeight: "400",
		},

		"& .MuiTypography-root": {
			marginRight: "5px",
			paddingLeft: "5px",
		},
	},
}));

const data = [
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
	{
		id: 1,
		title: "PUBG Mobile UC Global",
	},
];

const RigitCard = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3}>
				<div className={classes.cardTitle}>
					<Typography variant="h5">PUBG Mobile</Typography>-
					<Typography variant="h6">Game Topup</Typography>
				</div>
				<Box>
					{data.map((item) => (
						<div>
							<Box>
								<div>
									<img src={PubgMobile} alt="" />
								</div>
								<div>
									<Typography>{item.title}</Typography>
								</div>
							</Box>
						</div>
					))}
				</Box>
			</Paper>
		</div>
	);
};

export default RigitCard;
