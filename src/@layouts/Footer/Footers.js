import { TrustPoint } from "@components";
import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import {
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
	YouTube,
} from "@material-ui/icons";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	root: {
		padding: `${theme.spacing(1)}rem 0`,
		width: "100%",
		display: "block",

		"@media (max-width:600px)": {
			"& .MuiGrid-item": {
				marginTop: "30px",
			},
		},

		"& h6": {
			fontSize: "18px",
			marginBottom: "1rem",
		},

		// "& .MuiGrid-item": {
		// 	"&:not(:first-child)": {
		// 		"& > div": {
		// 			display: "flex",
		// 			alignItems: "flex-start",
		// 			justifyContent: "center",
		// 		},
		// 	},

		// 	"&:nth-last-of-type(1)": {
		// 		"& > div": {
		// 			justifyContent: "flex-end",
		// 		},
		// 	},
		// },

		"& ul": {
			listStyle: "none",

			"& ul": {
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				flexWrap: "wrap",
				"& li": {
					margin: "0 1px",
					padding: ".4rem",

					"&.facebook": {
						"& a": {
							"&:hover": {
								backgroundColor: "#0576e8",
								"& svg": {
									color: "#fff",
								},
							},
						},
					},

					"&.twitter": {
						"& a": {
							"&:hover": {
								backgroundColor: "#1da1f2",
							},
						},
					},

					"&.insta": {
						"& a": {
							"&:hover": {
								border: "1px solid transparent",
								background:
									"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",
							},
						},
					},

					"&.youtube": {
						"& a": {
							"&:hover": {
								backgroundColor: "#ff0100",
							},
						},
					},

					"&.linkedin": {
						"& a": {
							"&:hover": {
								backgroundColor: "#0a66c2",
							},
						},
					},

					"&:first-child": {
						margin: 0,
					},

					"& a": {
						width: "2.4rem",
						height: "2.4rem",
						borderRadius: "50%",
						border: "1px solid #ddd",
						borderColor: theme.palette.text.main,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transition: ".3s all ease-in-out",

						"&:hover": {
							border: "1px solid #fff !important",
							"& svg": {
								color: "#fff",
							},
						},

						"& svg": {
							color: theme.palette.text.main,
							transition: ".3s all ese-in-out",
							fontSize: "1.5rem",
						},
					},
				},
			},

			"& > li": {
				padding: `${theme.spacing(5)}px 0`,
				"& a": {
					textDecoration: "none",
					fontSize: "16px",
					color: "#383838",
				},
			},
		},
	},
}));

const Footer = () => {
	const classes = useStyle();

	return (
		<Box className={classes.root}>
			<Container maxWidth="xl">
				<Grid container>
					<Grid item xs={12} sm={6} md={4} lg={2}>
						<div>
							<div>
								<Typography variant="h6">
									Arekta Coin Store
								</Typography>
								<ul>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											About
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Careers
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Contact Us
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											FAQ
										</Typography>
									</li>
								</ul>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={2}>
						<div>
							<div>
								<Typography variant="h6">
									Arekta Coin Store
								</Typography>
								<ul>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											How to buy
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Support
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Terms & Conditions
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Privacy & Cookies
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Refund Policy
										</Typography>
									</li>
								</ul>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={4} md={4} lg={2}>
						<div>
							<div>
								<Typography variant="h6">
									Arekta Coin Store
								</Typography>
								<ul>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Affiliation
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Sponsorship
										</Typography>
									</li>
									<li>
										<Typography
											component={RouterLink}
											to="/"
										>
											Sell on Arekta Coin Sotre
										</Typography>
									</li>
									<li></li>
								</ul>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={3}>
						<div>
							<div>
								<Typography variant="h6">
									Follow us on
								</Typography>
								<ul>
									<li>
										<ul>
											<li className="facebook">
												<Typography
													component="a"
													href="/"
												>
													<Facebook />
												</Typography>
											</li>
											<li className="twitter">
												<Typography
													component="a"
													href="/"
												>
													<Twitter />
												</Typography>
											</li>
											<li className="insta">
												<Typography
													component="a"
													href="/"
												>
													<Instagram />
												</Typography>
											</li>
											<li className="youtube">
												<Typography
													component="a"
													href="/"
												>
													<YouTube />
												</Typography>
											</li>
											<li className="linkedin">
												<Typography
													component="a"
													href="/"
												>
													<LinkedIn />
												</Typography>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={3}>
						<div>
							<div>
								<Typography variant="h6">
									See our reviews on
								</Typography>
								<TrustPoint />
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
