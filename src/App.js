import React, { lazy } from 'react';
import routes from './pages/routes.js';
import withSuspense from './wrappers/withSuspense';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routeMap = {};
routes.forEach((route) => {
	routeMap[route] = lazy(() => import(`./pages/${route}`));
});

function App() {
	const allRoutes = routes.map((route) => {
		if (route === routes[0]) {
			return (
				<Route key={route} exact path='/' component={routeMap[route]} />
			);
		}
		return (
			<Route key={route} path={`/${route}`} component={routeMap[route]} />
		);
	});

	return (
		<Router>
			<Navbar routes={routes} />
			<Switch>{allRoutes}</Switch>
		</Router>
	);
}

export default withSuspense(App);
