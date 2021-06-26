import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import React from "react";
import DiscordIcon from "../../assets/images/discord-logo.png";
import Circle from "../../assets/images/freefire.png";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "6rem",

		"& h1": {
			fontWeight: "700",
		},

		"& h2": {
			margin: "1rem 0",
			fontWeight: "400",
		},

		"& button": {
			margin: ".4rem 1rem 0 0",
			padding: ".4rem 2rem !important",

			"&:first-child": {
				backgroundColor: theme.palette.common.blue,
			},

			"&:nth-child(2)": {
				backgroundColor: theme.palette.common.discord,
				"& img": {
					maxWidth: "1.2rem",
				},
			},
		},
	},

	image: {
		marginRight: "2rem",

		"& img": {
			width: "8rem",
			height: "8rem",
			borderRadius: "50%",
			objectFit: "cover",
		},
	},
}));

const SupportBox = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3}>
				<Box display="flex" alignItems="center">
					<div className={classes.image}>
						<div>
							<img src={Circle} alt="" />
						</div>
					</div>
					<div>
						<Typography variant="h1">Need Support?</Typography>
						<Typography variant="h2">
							We Provide 24/7 Voice and Text Support
						</Typography>
						<Box display="flex" alignItems="center">
							<Button
								startIcon={<FacebookIcon />}
								color="primary"
							>
								Facebook
							</Button>
							<Button
								startIcon={<img src={DiscordIcon} />}
								color="secondary"
							>
								Discord
							</Button>
							<Button startIcon={<LiveHelpIcon />}>
								How to Shop
							</Button>
						</Box>
					</div>
				</Box>
			</Paper>
		</div>
	);
};

export default SupportBox;
