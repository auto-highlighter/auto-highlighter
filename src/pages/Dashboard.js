import React from 'react';
import { Helmet } from 'react-helmet';

export default function Dashboard(props) {
	return (
		<>
			<Helmet>
				<title>Highlight-Inator | User Highlight Dashboard</title>
				<meta
					name='description'
					content='Create, download, and check on the status of your automatically generated VOD highlights.'
				/>
			</Helmet>
			<div>
				<h1>Dashboard</h1>
			</div>
		</>
	);
}
