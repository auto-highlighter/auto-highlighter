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
				<h1 className='text-center'>Timestamp Generator</h1>
				<div className='grid grid-cols-3 gap-80 mx-40'>
					<div className='p-8'>
						<Inputs />
					</div>
					<div className='p-8'>
						<Timer />
					</div>
					<div className='p-8'>
						<Times />
					</div>
				</div>
			</div>
		</>
	);
}
