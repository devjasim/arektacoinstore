import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Jett from "../../../assets/animation/jett.gif";
import animationData from "../../../assets/animation/jett.json";
import Background from "../../../assets/images/background.png";

// const defaultOptions = {
// 	loop: true,
// 	autoplay: true,
// 	animationData: animationData,
// 	rendererSettings: {
// 		preserveAspectRatio: "xMidYMid slice",
// 	},
// };

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
		position: "relative",
		margin: `${theme.spacing(2)}rem 0`,
		padding: `${theme.spacing(5)}rem 0`,
		maxWidth: "100%",
		"& > div": {
			backgroundColor: "#ff4654",
			padding: `${theme.spacing(5)}rem 0`,
			backgroundImage: `url(${Background})`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",

			"& h1": {
				fontSize: "6rem",
				textTransform: "uppercase",
				fontWeight: "900",
				color: theme.palette.text.light,
			},

			"& p": {
				fontSize: "2.5rem",
				color: theme.palette.text.light,
			},

			"& .MuiBox-root": {
				marginTop: "3rem",

				"& > div": {
					marginRight: "2rem",
					paddingBottom: "2rem",

					"&:last-child": {
						margin: 0,
					},
				},

				"& a": {
					// backgroundColor: theme.palette.secondary.light,
					color: theme.palette.text.light,
					fontWeight: "600",
					// padding: `${theme.spacing(5)}px ${theme.spacing(8)}px`,
					textTransform: "uppercase",
					fontSize: "1.5rem",
					border: "1px solid #fff",
					marginRight: "2rem",
					borderRadius: "0",
					textDecoration: "none",
					position: "relative",
					zIndex: "1",
					padding: "1.6rem .6rem",
					display: "block",

					"& span": {
						opacity: "1",
						zIndex: "1",
						position: "relative",
						transition: "opacity .2s ease",
						backgroundColor: theme.palette.text.light,
						color: theme.palette.primary.main,
						padding: "15px 40px",
					},

					"&::after, &::before": {
						content: "''",
						background: theme.palette.common.redColor,
						position: "absolute",
						zIndex: "0",
						transition: "transform .2s ease-in-out",
					},

					"&:hover:before": {
						transform: "scaleY(0)",
					},

					"&::before": {
						top: "30px",
						right: "-2px",
						bottom: "30px",
						left: "-2px",
					},
				},
			},
		},
	},

	image: {
		position: "absolute",
		top: "39%",
		transform: "translateY(-50%)",
		right: "30px",

		"@media (max-width: 1200px)": {
			position: "initial",
			transform: "translate(0)",
		},

		"@media (min-width: 1350px)": {
			"& img": {
				minHeight: "48rem",
				transform: "rotate3d(0, 20, 0, 180deg)",
			},
		},
	},
}));

const Valorant = () => {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<div>
				<Container maxWidth="xl">
					<Box elevation={0}>
						<Grid alignItems="center" container spacing={0}>
							<Grid item sm={12} md={12} xl={11}>
								<Typography variant="h1">
									Valorant Points
								</Typography>
								<Typography variant="body2">
									Vay VALORANT Points in the easiest way!
								</Typography>
								<Box
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-start",
										flexWrap: "wrap",
									}}
								>
									<div>
										<Typography
											component={RouterLink}
											to="/"
										>
											<span>Bangladesh</span>
										</Typography>
									</div>
									<div>
										<Typography
											component={RouterLink}
											to="/"
										>
											<span>Malaysia</span>
										</Typography>
									</div>
								</Box>
							</Grid>
							<Grid item sm={12} md={12} xl={1}>
								<Box className={classes.image}>
									<img src={Jett} alt="" />
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</div>
	);
};

export default Valorant;
