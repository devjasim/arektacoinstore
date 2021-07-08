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
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import Image from "../../../assets/images/Cyberpunk.jpg";

const useStyle = makeStyles((theme) => ({
	root: {
		paddingBottom: "5rem",

		"@media (min-height: 990px)": {
			marginTop: "-24vh",
		},

		"@media (min-height: 769px)": {
			marginTop: "-20vh",
		},

		"@media (max-height: 768px)": {
			marginTop: "-12vh",
		},

		"@media (max-height: 660px)": {
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
			minHeight: "100%",
			borderRadius: "1rem",
			paddingBottom: "1.2rem",
			width: "100%",
			marginBottom: "2rem",
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

// install Swiper modules
SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

export default function SwiperSlider() {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<Swiper
				spaceBetween={100}
				loop={true}
				slidesPerView={4}
				slideShadows={false}
				coverflowEffect={{
					rotate: 50,
					stretch: 10,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				centeredSlides={true}
				effect={"coverflow"}
				grabCursor={true}
				breakpoints={{
					// when window width is >= 320px
					320: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// when window width is >= 480px
					480: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					// when window width is >= 640px
					640: {
						slidesPerView: 2,
						spaceBetween: 40,
					},

					1200: {
						slidesPerView: 4,
						spaceBetween: 100,
					},
				}}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 0,
					stretch: -50,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={false}
				className="mySwiper"
			>
				{allGames.map((data, index) => {
					return (
						<SwiperSlide>
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
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
