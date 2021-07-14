import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: "20px",
		"& iframe": {
			borderRadius: "20px",
		},
	},
}));

const YoutubeVideo = ({ embedId }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<iframe
				width="100%"
				height="380"
				src={`https://www.youtube.com/embed/${embedId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
		</div>
	);
};

YoutubeVideo.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeVideo;
