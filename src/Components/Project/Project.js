import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},

	title: {
		// fontSize: 52,
	},

	media: {
		height: "160px",
	},
});

function Project({ title, image }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardMedia
				component="img"
				className={classes.media}
				title={title}
				src={image}
			/>
			<CardContent>
				<Typography className={classes.title} variant="h5">
					{title}
				</Typography>
			</CardContent>
		</Card>
	);
}

Project.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
};

export default Project;
