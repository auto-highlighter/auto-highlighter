import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFound(props) {
	return (
		<>
			<Helmet>
				<title>Highlight-Inator | 404 Not Found</title>
				<meta name='description' content='Page not found' />
			</Helmet>
			<div>
				<h1 className='text-center'>404 NotFound</h1>
			</div>
		</>
	);
}
