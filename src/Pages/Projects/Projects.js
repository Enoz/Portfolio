import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	root: {},
}));

export default function Projects() {
	const classes = useStyles();
	// const [value, setValue] = React.useState(0);

	return (
		<Container maxWidth="md" className={classes.root}>
			test
		</Container>
	);
}
