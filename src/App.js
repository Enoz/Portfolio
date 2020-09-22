import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import NavBar from "./Components/NavBar/NavBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";

function App() {
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: colors.teal[600],
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/projects" component={Projects} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
