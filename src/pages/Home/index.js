import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Discord from "./Discord";
import Hero from "./Hero/Hero";
import Partner from "./Partner";
import Subscription from "./Subscription";
import SwiperSlider from "./SwiperSlider";
import TopUp from "./TopUp";
import Valorant from "./Valorant";
// <Carousels />

const useStyle = makeStyles(() => ({
	root: {
		position: "relative",
	},
}));

const Home = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Container maxWidth="xl">
				<Hero />
			</Container>
			<SwiperSlider />
			<Container maxWidth="xl">
				<Partner />
			</Container>
			<Valorant />
			<TopUp />
			<Subscription />
			<Discord />
		</div>
	);
};

export default Home;
