import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";

const useStyle = makeStyles((theme) => ({
	ratings: {
		fontSize: "18px",
	},
}));

const Ratings = (rate) => {
	const classes = useStyle();
	const [value, setValue] = React.useState(3);

	return (
		<Rating
			name="simple-controlled"
			className={classes.ratings}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		/>
	);
};

export default Ratings;
