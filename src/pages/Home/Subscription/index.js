import {
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import React from "react";
import Auto from "../../../assets/images/auto.png";
import EPlay from "../../../assets/images/play.png";
import Xbox from "../../../assets/images/xboxround.png";

const useStyle = makeStyles((theme) => ({
	root: {
		padding: `${theme.spacing(6)}rem 0 ${theme.spacing(5)}rem 0`,

		"@media (max-width: 768px)": {
			paddingBottom: "0",
		},

		"& .MuiPaper-root": {
			padding: "2.5rem 0",
			minHeight: "20rem",
			textAlign: "center",

			"& .MuiGrid-item": {
				position: "relative",
			},

			"& h2": {
				fontSize: "2.5rem",
				lineHeight: "3.5rem",
			},
		},
	},

	box: {
		position: "absolute",
		bottom: "-19.5rem",
		width: "100%",
		left: "50%",
		transform: "translateX(-50%)",

		"@media (max-width: 768px)": {
			position: "initial",
			transform: "translateX(0)",
			marginTop: "2rem",
		},

		"& > div": {
			display: "flex",
			justifyContent: "space-around",
			alignItems: "Center",
		},
	},
}));

const Subscription = () => {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<Container maxWidth="xl">
				<Paper elevation={3}>
					<Grid justify="center" alignItems="center" container>
						<Grid item md={10} xl={8}>
							<Typography variant="h2">
								Take Your Gaming Experience To The Next Level
								With Premium Subscirptions.
							</Typography>
							<div className={classes.box}>
								<div>
									<div>
										<div>
											<div>
												<img src={EPlay} alt="" />
											</div>
										</div>
									</div>
									<div>
										<div>
											<div>
												<img src={Xbox} alt="" />
											</div>
										</div>
									</div>
									<div>
										<div>
											<div>
												<img src={Auto} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	);
};

export default Subscription;
