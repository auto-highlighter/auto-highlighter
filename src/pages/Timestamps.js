import React from 'react';
import Timer from '../components/timestamps/timer.js';
import Times from '../components/timestamps/times.js';
import Inputs from '../components/timestamps/inputs.js';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

export default function Timestamps(props) {
	const [isTimerOn, setIsTimerOn] = useState(false);
	const [times, setTimes] = useState([]);
	const [time, setTime] = useState(0);

	const toggleTimer = () => {
		setIsTimerOn((timerOn) => !timerOn);
	};

	const markHighlight = () => {
		setTimes((times) => [...times, time]);
	};

	const addTime = (timeToAdd) => {
		setTime((time) => time + timeToAdd);
	};

	const reset = () => {
		setIsTimerOn(false);
		setTimes([]);
		setTime(0);
	};

	const downloadTimestamps = () => {
		const timestampsBlob = new Blob([JSON.stringify(times)], {
			type: 'text/json;charset=utf-8',
		});
		const blobUrl = URL.createObjectURL(timestampsBlob);

		const anchor = document.createElement('a');
		anchor.href = blobUrl;
		anchor.target = '_blank';
		anchor.download = 'timestamps.json';
		anchor.click();

		URL.revokeObjectURL(blobUrl);
	};
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
			<div className='h-full flex items-center flex-col'>
				<h1 className='text-center flex-grow-0'>Timestamp Generator</h1>
				<div className='flex-wrap flex mx-3 justify-around flex-grow w-full'>
					<div className='mx-auto my-4 px-3 w-80 text-center border flex justify-center align-middle items-center flex-col'>
						<Inputs
							isTimerOn={isTimerOn}
							toggleTimer={toggleTimer}
							markHighlight={markHighlight}
							reset={reset}
							downloadTimestamps={downloadTimestamps}
						/>
					</div>
					<div className='mx-auto my-4 px-3 w-80 text-center border flex justify-center align-middle items-center flex-col'>
						<Timer
							timerOn={isTimerOn}
							addTime={addTime}
							time={time}
						/>
					</div>
					<div className='mx-auto my-4 px-3 w-80 text-center border flex justify-center align-middle items-center flex-col'>
						<Times times={times} />
					</div>
				</div>
			</div>
		</>
	);
}
