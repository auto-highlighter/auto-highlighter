import React from 'react';
import { Helmet } from 'react-helmet';

export default function LandingPage(props) {
	return (
		<>
			<Helmet>
				<title>Highlight-Inator | Automatic Vod Highlighter</title>
				<meta
					name='description'
					content='The Highlight-Inator is a tool for streamers to automically generate a highlight video from a VOD'
				/>
			</Helmet>
			<div>
				<h1>LandingPage</h1>
			</div>
		</>
	);
}
