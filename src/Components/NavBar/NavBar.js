import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
});

export default function NavBar() {
	const classes = useStyles();
	const [value, setValue] = React.useState(window.location.pathname);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			value={value}
			onChange={handleChange}
			className={classes.root}
			showLabels
		>
			<BottomNavigationAction
				component={Link}
				to="/"
				label="Home"
				value="/"
				icon={<HomeIcon />}
				className={classes.content}
			/>
			<BottomNavigationAction
				component={Link}
				to="/projects"
				label="Projects"
				value="/projects"
				icon={<GitHubIcon />}
				className={classes.content}
			/>
		</BottomNavigation>
	);
}
