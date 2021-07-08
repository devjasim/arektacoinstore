import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import YoutubeVideo from "./YoutubeVideo";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",

		"& .MuiBox-root": {
			"& div": {
				margin: "1rem 0 1.2rem 0",
				"& h6": {
					marginBottom: "1rem",
				},

				"& a": {
					color: theme.palette.primary.main,
				},
			},
		},
	},
}));

const LeftInfo = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box>
				<Typography variant="h3">About PUBG Mobile</Typography>
				<div>
					<Typography variant="h6">
						PUBG Mobile Online Store for Unknowd Cash - PUBG UC
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima{" "}
						<Typography variant="body1" component="a" href="!#">
							fugit placeat facere veniam nisi
						</Typography>{" "}
						earum dolorem aliquam dolor praesentium magnam
						excepturi, deserunt illo quis fuga ullam distinctio sint
						libero harum.
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Soluta accusamus, repellat nihil voluptatibus
						tempore, fugiat repudiandae molestiae placeat aliquid
						maxime recusandae perferendis tempora voluptates odio
						quo neque exercitationem, quia sequi.
					</Typography>
				</div>
				<div>
					<Typography variant="h6">
						PUBG Mobile Online Store for Unknowd Cash - PUBG UC
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima fugit placeat facere veniam nisi earum dolorem
						aliquam dolor praesentium magnam excepturi, deserunt
						illo quis fuga ullam distinctio sint libero harum.
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Soluta accusamus, repellat nihil voluptatibus
						tempore, fugiat repudiandae molestiae placeat aliquid
						maxime recusandae perferendis tempora voluptates odio
						quo neque exercitationem, quia sequi.
					</Typography>
				</div>
				<div>
					<Typography variant="h6">
						PUBG Mobile Online Store for Unknowd Cash - PUBG UC
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima fugit placeat facere veniam nisi earum dolorem
						aliquam dolor praesentium magnam excepturi, deserunt
						illo quis fuga ullam distinctio sint libero harum.
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Soluta accusamus, repellat nihil voluptatibus
						tempore, fugiat repudiandae molestiae placeat aliquid
						maxime recusandae perferendis tempora voluptates odio
						quo neque exercitationem, quia sequi.
					</Typography>
				</div>
				<div>
					<Typography variant="h6">
						PUBG Mobile Online Store for Unknowd Cash - PUBG UC
					</Typography>
					<YoutubeVideo embedId="rokGy0huYEA" />
				</div>
			</Box>
		</div>
	);
};

export default LeftInfo;
