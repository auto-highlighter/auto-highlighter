import React from 'react';
import { Helmet } from 'react-helmet';

export default function Help(props) {
	return (
		<>
			<Helmet>
				<title>Highlight-Inator | Help</title>
				<meta name='description' content='Faq and Support' />
				<link
					rel='canonical'
					href='https://Highlight-Inator.DevRyan.io/Help'
				/>
			</Helmet>
			<div>
				<h1 className="text-center">Help</h1>
			</div>
		</>
	);
}
