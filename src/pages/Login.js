import React from 'react';
import { Helmet } from 'react-helmet';

export default function Login(props) {
	return (
		<>
			<Helmet>
				<title>Highlight-Inator | User Login</title>
				<meta
					name='description'
					content='Log into your Highlight-Inator account'
				/>
				<link
					rel='canonical'
					href='https://Highlight-Inator.DevRyan.io/Login'
				/>
			</Helmet>
			<div>
				<h1>Login</h1>
			</div>
		</>
	);
}
