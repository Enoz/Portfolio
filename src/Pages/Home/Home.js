import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Me from "./me.jpg";
import {
	createMuiTheme,
	ThemeProvider,
	makeStyles,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import * as colors from "@material-ui/core/colors";

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
		margin: "5px",
	},
}));

export default function Home() {
	const classes = useStyles();

	const languages = [
		{
			label: "C/C++",
			href: "https://www.cplusplus.com/",
			color: colors.lightBlue[700],
		},
		{
			label: "Python",
			href: "https://www.python.org/",
			color: colors.orange[500],
		},
		{ label: "Lua", href: "https://www.lua.org/", color: colors.blue[900] },
		{
			label: "assembly",
			href: "https://en.wikipedia.org/wiki/X86_assembly_language",
			color: colors.red[700],
		},
		{
			label: "Java",
			href: "https://www.java.com/en/",
			color: colors.orange[800],
		},
		{
			label: "Javascript",
			href: "https://www.javascript.com/",
			color: colors.red[600],
		},
		{
			label: "CSS",
			href: "https://en.wikipedia.org/wiki/CSS",
			color: colors.blue[600],
		},
		{
			label: "C#",
			href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
			color: colors.green[600],
		},
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

	const getTheme = (tech) => {
		const theme = {};
		if (tech.color) {
			theme.palette = {
				primary: {
					main: tech.color,
				},
			};
		}
		return createMuiTheme(theme);
	};

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
							<ThemeProvider theme={getTheme(language)}>
								<Chip
									label={language.label}
									component="a"
									href={language.href}
									clickable
									color="primary"
									className={classes.chip}
								/>
							</ThemeProvider>
						);
					})}

					<Typography variant="h5">Frameworks</Typography>
					{frameworks.map((framework) => {
						return (
							<ThemeProvider theme={getTheme(framework)}>
								<Chip
									label={framework.label}
									component="a"
									href={framework.href}
									clickable
									color="primary"
									className={classes.chip}
								/>
							</ThemeProvider>
						);
					})}
				</Paper>
			</Grid>
		</Container>
	);
}
