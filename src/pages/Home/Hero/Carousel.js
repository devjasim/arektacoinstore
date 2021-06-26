import { ArrowButton, CategoryTag, Ratings } from "@components";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React from "react";
import { isMobile } from "react-device-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../../../assets/images/Cyberpunk.jpg";

const useStyle = makeStyles((theme) => ({
	root: {
		paddingBottom: "5rem",

		"@media (maxHeight: 560px)": {
			marginTop: "calc(100vh - 100vh)",
		},

		"& ul": {
			"& .react-multi-carousel-item--active": {
				"& .MuiPaper-root": {
					transform: "scale(1)",
					minHeight: "500px",
				},
			},
		},

		"& .MuiCard-root": {
			minHeight: "90%",
			borderRadius: "1rem",
			paddingBottom: "1.2rem",
		},

		"& .react-multi-carousel-item": {
			minHeight: "20rem",
			padding: `0 ${theme.spacing(1)}rem`,
			marginBottom: "2rem",
		},

		"& .react-multi-carousel-item--active": {
			"&:nth-child(2)": {
				transform: "scale(1.4)",
			},
		},
	},

	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		borderRadius: "1rem",
	},

	cardContent: {
		"& .MuiBox-root": {
			"& div.head": {
				marginTop: "1rem",
				borderBottom: "4px solid #f9f9f9",
				paddingBottom: "2rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			},

			"& div.bottom": {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				marginTop: "2rem",

				"& h4": {
					textTransform: "uppercase",
					fontWeight: "500",
				},
			},
		},
	},
}));

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1920 },
		items: 3,
	},
	desktop: {
		breakpoint: { max: 1920, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const allGames = [
	{
		name: "Cyberprunk 2077",
	},
	{
		name: "Cyberprunk 2077",
	},
	{
		name: "Cyberprunk 2077",
	},
	{
		name: "Cyberprunk 2077",
	},
	{
		name: "Cyberprunk 2077",
	},
	{
		name: "Cyberprunk 2077",
	},
	{
		name: "Cyberprunk 2077",
	},
	{
		name: "Cyberprunk 2077",
	},
];

const Carousels = () => {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<Carousel
				responsive={responsive}
				swipeable={true}
				autoPlay={true}
				draggable={true}
				showDots={false}
				arrows={false}
				infinite={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				transitionDuration={500}
				containerClass="carousel-container"
				centerMode={isMobile ? false : true}
			>
				{allGames.map((data, index) => {
					return (
						<Card key={index} elevation={3}>
							<CardMedia
								className={classes.media}
								image={Image}
								title="Paella dish"
							/>
							<CardContent className={classes.cardContent}>
								<Box my={3}>
									<Typography variant="h2">
										{data.name}
									</Typography>
									<div className="head">
										<Ratings rate={4} />
										<CategoryTag link="/" name="Name" />
									</div>
									<div className="bottom">
										<Typography variant="h4">
											BDT 400
										</Typography>
										<ArrowButton link="/" />
									</div>
								</Box>
							</CardContent>
						</Card>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Carousels;
