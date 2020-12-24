import React from 'react';
import Timer from '../components/timestamps/timer.js';
import Times from '../components/timestamps/times.js';
import Inputs from '../components/timestamps/inputs.js';
import { Helmet } from 'react-helmet';

export default function Timestamps(props) {
	return (
		<>
			<Helmet>
				<title>Highlight-Inator | Highlight Timestamp Generator</title>
				<meta
					name='description'
					content='Generate timestamps for your vod'
				/>
				<link
					rel='canonical'
					href='https://Highlight-Inator.DevRyan.io/Timestamps'
				/>
			</Helmet>
			<div>
				<h1>Timestamps</h1>
				<Timer />
				<Times />
				<Inputs />
			</div>
		</>
	);
}
