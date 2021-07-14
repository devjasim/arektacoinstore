import { Ratings } from "@components";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Avatar from "../../assets/images/freefire.png";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginTop: "4rem",
	},

	content: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		textAlign: "center",
		position: "relative",

		"& > div:first-child": {
			position: "absolute",
			top: "-3rem",
			backgroundColor: "#ddd",
			padding: ".3rem",
			left: "50%",
			borderRadius: "50%",
			transform: "translateX(-50%)",
		},

		"& div:last-child": {
			paddingTop: "3rem",
		},

		"& img": {
			width: "4rem",
			height: "4rem",
			borderRadius: "50%",
			objectFit: "cover",
		},

		"& h2": {
			margin: ".8rem 0",
			fontSize: "1.5rem",
			fontWeight: "500",
		},
	},
}));

const Reviews = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={10}>
				<Grid item xs="12" sm="6" md="3">
					<Paper elevation={2}>
						<div className={classes.content}>
							<div>
								<img src={Avatar} alt="" />
							</div>
							<div>
								<Ratings />
								<Typography variant="h2">Mark Angel</Typography>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Fugiat, repudiandae.{" "}
								</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
				<Grid item xs="12" sm="6" md="3">
					<Paper elevation={2}>
						<div className={classes.content}>
							<div>
								<img src={Avatar} alt="" />
							</div>
							<div>
								<Ratings />
								<Typography variant="h2">Mark Angel</Typography>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Fugiat, repudiandae.{" "}
								</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
				<Grid item xs="12" sm="6" md="3">
					<Paper elevation={2}>
						<div className={classes.content}>
							<div>
								<img src={Avatar} alt="" />
							</div>
							<div>
								<Ratings />
								<Typography variant="h2">Mark Angel</Typography>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Fugiat, repudiandae.{" "}
								</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
				<Grid item xs="12" sm="6" md="3">
					<Paper elevation={2}>
						<div className={classes.content}>
							<div>
								<img src={Avatar} alt="" />
							</div>
							<div>
								<Ratings />
								<Typography variant="h2">Mark Angel</Typography>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Fugiat, repudiandae.{" "}
								</Typography>
							</div>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Reviews;
