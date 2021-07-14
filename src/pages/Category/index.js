import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import LeftInfo from "./LeftInfo";
import RightCard from "./RightCard";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "-5rem",
	},
}));

const Category = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="xl">
				<Banner />
				<Box>
					<Grid container spacing={10}>
						<Grid item xs={12} sm={12} lg={6} xl={5}>
							<LeftInfo />
						</Grid>
						<Grid item xs={12} sm={12} lg={6} xl={7}>
							<Box>
								<RightCard />
							</Box>
							<Box>
								<RightCard />
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default Category;
