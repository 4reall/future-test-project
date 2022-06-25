import { Route, Routes as RoutesDOM } from 'react-router-dom';

import { routes } from './paths';

const Routes = () => {
	const content = routes.map((route, i) => (
		<Route key={i} path={route.path} element={<route.component />} />
	));
	return <RoutesDOM>{content}</RoutesDOM>;
};

export default Routes;
