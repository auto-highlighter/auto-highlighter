import React, { lazy, Suspense } from 'react';
import routes from './constants/routes.js';
import Navbar from './components/navbar/navbar.js';
import NotFound from './pages/404.js';
import Loading from './pages/Loading.js';
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
		<div className='h-screen flex flex-col'>
			<Router>
					<Navbar routes={routes} />
				<div className='flex-grow'>
					<Suspense fallback={<Loading />}>
						<Switch>
							{allRoutes}

							<Route component={NotFound} />
						</Switch>
					</Suspense>
				</div>
			</Router>
		</div>
	);
}

export default App;
