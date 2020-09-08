import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Me from "./me.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "20px",
	},
	avatar: {
		width: "50%",
		height: "50%",
		margin: "auto",
	},
	social: {
		margin: "auto",
	},
	paper: {
		marginTop: "10px",
		padding: "10px",
	},
	chip: {
		// marginRight: "5px",
		// marginBottom: "5px",
		margin: "5px",
	},
}));

export default function Home() {
	const classes = useStyles();

	const languages = [
		{ label: "C/C++", href: "https://www.cplusplus.com/" },
		{ label: "Python", href: "https://www.python.org/" },
		{ label: "Lua", href: "https://www.lua.org/" },
		{
			label: "assembly",
			href: "https://en.wikipedia.org/wiki/X86_assembly_language",
		},
		{ label: "Java", href: "https://www.java.com/en/" },
		{
			label: "Javascript",
			href: "https://www.javascript.com/",
		},
		{ label: "CSS", href: "https://en.wikipedia.org/wiki/CSS" },
		{ label: "C#", href: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
		{
			label: "VB.NET",
			href: "https://docs.microsoft.com/en-us/dotnet/visual-basic/",
		},
	];

	const frameworks = [
		{ label: "Material UI", href: "https://material-ui.com" },
		{ label: "Bootstrap", href: "https://getbootstrap.com/" },
		{ label: "Java Spring", href: "https://spring.io/" },
		{ label: "React", href: "https://reactjs.org/" },
		{ label: "Angular", href: "https://angular.io/" },
	];

	return (
		<Container maxWidth="md" className={classes.root}>
			<Grid container direction="column" justify="center">
				<Avatar alt="Arkadiusz Dudek" src={Me} className={classes.avatar} />
				<Paper className={classes.paper}>
					<Typography variant="h4">About Me</Typography>
					<Typography variant="body1">
						My name is Arkadiusz Dudek and I make a mean omlette.
					</Typography>
				</Paper>
				<Paper className={classes.paper}>
					<Typography variant="h4">Technologies</Typography>
					<Typography variant="h5">Languages</Typography>
					{languages.map((language) => {
						return (
							<Chip
								label={language.label}
								component="a"
								href={language.href}
								clickable
								color="primary"
								className={classes.chip}
							/>
						);
					})}

					<Typography variant="h5">Frameworks</Typography>
					{frameworks.map((framework) => {
						return (
							<Chip
								label={framework.label}
								component="a"
								href={framework.href}
								clickable
								color="primary"
								className={classes.chip}
							/>
						);
					})}
				</Paper>
			</Grid>
		</Container>
	);
}
