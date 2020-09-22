import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Project from "Components/Project/Project";
import Portfolio from "Resources/ProjectPhotos/Portfolio.png";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "20px",
	},
}));

export default function Projects() {
	const classes = useStyles();

	return (
		<Container maxWidth="sm" className={classes.root}>
			<Project title="Portfolio" image={Portfolio}></Project>
		</Container>
	);
}
