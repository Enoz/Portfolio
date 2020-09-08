import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import NavBar from "./Components/NavBar/NavBar";

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/projects" component={Projects} />
			</Switch>
		</Router>
	);
}

export default App;
