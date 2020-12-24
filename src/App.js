import React, { lazy, Suspense } from 'react';
import routes from './constants/routes.js';
import Navbar from './components/navbar/navbar.js';
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
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>{allRoutes}</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
