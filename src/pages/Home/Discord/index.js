import {
	Button,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/animation/discord.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: "#7289da",
		padding: `${theme.spacing(5)}rem 0`,
		margin: `${theme.spacing(5)}rem 0 0 0`,

		"& .MuiPaper-root": {
			backgroundColor: "transparent",
			textAlign: "center",

			"& .MuiButton-root": {
				padding: ".6rem 3rem",
				fontSize: "1.5rem",
				backgroundColor: theme.palette.text.light,
				color: "#7289da",
			},

			"& h1": {
				color: theme.palette.text.light,
				fontSize: "4rem",
			},

			"& p": {
				color: theme.palette.text.light,
				fontSize: "2rem",
				margin: `${theme.spacing(2)}rem 0`,
				fontWeight: "300",
			},
		},
	},
}));

const Discord = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Container maxWidth="xl">
				<Paper elevation={0}>
					<Grid
						justify="center"
						alignItems="center"
						container
						spacing={3}
					>
						<Grid item sm={12} md={8} lg={9} xl={8}>
							<Typography variant="h1">
								Get Discord Nitro Now!
							</Typography>
							<Typography variant="body2">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Animi voluptatem voluptate vel
								veniam obcaecati libero, quidem commodi culpa
								sit eveniet ad voluptates sequi harum magnam
								assumenda labore ea modi a?
							</Typography>
							<Button
								elevation={0}
								variant="contained"
								color="secondary"
							>
								Boos Now!
							</Button>
						</Grid>
						<Grid item sm={12} md={4} lg={3} xl={4}>
							<Lottie
								options={defaultOptions}
								minHeight={200}
								maxWidth={400}
							/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	);
};

export default Discord;
