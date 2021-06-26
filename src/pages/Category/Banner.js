import { Box, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import PublicIcon from "@material-ui/icons/Public";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PubgBanner from "../../assets/images/bubg_banner.jpeg";
import PubgMobile from "../../assets/images/pubg.png";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	banner: {
		width: "100%",
		marginBottom: "2rem",

		"& > div": {
			height: "550px",
			"@media (max-width:1920px)": {
				maxHeight: "550px",
			},
		},
		position: "relative",

		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			borderRadius: "1rem",
		},

		"& div.usersfsf": {
			position: "absolute",
			bottom: "0",
			left: "0",
			width: "100%",

			"& > .MuiBox-root": {
				backgroundColor: "#00000036",
				flexWrap: "wrap",
				padding: "1.2rem 1.5rem",
				borderRadius: "1rem",

				"& > .MuiBox-root": {
					display: "flex",
					alignItems: "center",
					flexWrap: "wrap",

					"& .MuiTypography-root": {
						color: theme.palette.common.white,

						"&.MuiTypography-h2": {
							marginBottom: ".2rem",
							display: "block",
						},
					},

					"& img": {
						width: "7rem",
						height: "auto",
						borderRadius: "10px",
					},
				},
			},
		},
	},

	link: {
		display: "flex",
		alignItems: "center",
		color: theme.palette.common.white,
		"& .MuiTypography-root": {
			marginRight: "6px",
			marginLeft: "6px",

			"&:first-child": {
				marginLeft: "0",
			},
		},
	},

	leftImage: {
		marginRight: "2rem",
	},
}));

const Banner = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box>
				<div className={classes.banner}>
					<div>
						<img src={PubgBanner} alt="" />
						<div className="usersfsf">
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<Box>
									<div className={classes.leftImage}>
										<img src={PubgMobile} alt="" />
									</div>
									<div>
										<Typography
											variant="h2"
											component={RouterLink}
											to="/"
										>
											PUBG Mobile
										</Typography>
										/
										<Typography>
											PUBG Corporation
										</Typography>
										<div className={classes.link}>
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												English
											</Typography>
											/
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												Mobile
											</Typography>
											/
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												Global
											</Typography>
										</div>
									</div>
								</Box>
								<Box flexDirection="column">
									<div>
										<div className={classes.link}>
											<Typography
												variant="body1"
												component="a"
											>
												SEAGM
											</Typography>
											/
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												Games
											</Typography>
											/
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												PUBG Mobile
											</Typography>
										</div>

										<Box
											display="flex"
											alignItems="center"
											justifyContent="space-between"
											marginTop="1rem"
										>
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												<PublicIcon />
											</Typography>
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												<FacebookIcon />
											</Typography>
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												<YouTubeIcon />
											</Typography>
											<Typography
												variant="body1"
												component="a"
												href="!#"
											>
												<TwitterIcon />
											</Typography>
										</Box>
									</div>
								</Box>
							</Box>
						</div>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default Banner;
