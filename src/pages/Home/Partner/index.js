import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import ImgTwo from "../../../assets/images/gplay.png";
import ImgThree from "../../../assets/images/itunes.png";
import ImgFive from "../../../assets/images/playstation.png";
import ImgOne from "../../../assets/images/steam.png";
import ImgFour from "../../../assets/images/xbox-logo.png";

const useStyle = makeStyles((theme) => ({
	root: {
		width: "100%",
		borderRadius: "2rem",
		padding: "3rem 1rem",

		"& .MuiBox-root": {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			flexWrap: "wrap",

			"& div": {
				flex: "1",
				padding: "0 2.5px",
				margin: "0 10px",
				textAlign: "center",
				"@media (min-width: 1160px)": {
					padding: "0 .5rem",
				},

				borderRight: "4px solid #ddd",

				"&:last-child": {
					borderRight: "none",
				},

				"& img": {
					filter: "grayscale(100%)",
					maxWidth: "160px",
					transition: ".4s all ease-in-out",
					maxHeight: "40px",
					minWidth: "100px",
					margin: "1rem 0",

					"@media (max-width: 768px)": {
						maxWidth: "140px",
					},

					"&:hover": {
						filter: "grayscale(0%)",
					},
				},
			},
		},
	},
}));

const Partner = () => {
	const classes = useStyle();

	return (
		<Paper className={classes.root} elevation={3}>
			<Box>
				<div>
					<img src={ImgOne} alt="" />
				</div>
				<div>
					<img src={ImgTwo} alt="" />
				</div>
				<div>
					<img src={ImgThree} alt="" />
				</div>
				<div>
					<img src={ImgFour} alt="" />
				</div>
				<div>
					<img src={ImgFive} alt="" />
				</div>
			</Box>
		</Paper>
	);
};

export default Partner;
