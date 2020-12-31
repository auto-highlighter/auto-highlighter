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

	const removeTimestamp = (index) => {
		setTimes((times) => {
			let newTimes = [...times];
			newTimes.splice(index, 1);
			return newTimes;
		});
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
				<h1 className='text-center flex-grow-0 py-2 font-header text-4xl'>
					Timestamp Generator
				</h1>
				<p className='font-sans w-2/5 hidden md:block text-center'>
					To generate timestamps for highlighting press the 'Start
					Timer' button as soon as you start streaming then each time
					you want to mark a section of the stream for higlighitng,
					press the 'Mark' button. Once finished streaming press the
					'Stop Timer' button and then the 'Download Timestamps'
					button. If you wish to undo a timestamp simply press the ❌
					next to the timestamp you wish to delete.
				</p>
				<div className='flex flex-grow w-full items-center sm:py-10'>
					<div className='flex-grow-0 sm:flex-wrap flex items-center justify-around w-full max-h-200 h-full flex-col sm:flex-row'>
						<div className='my-1 sm:my-4 px-3 w-64 sm:w-80 text-center flex justify-center align-middle items-center flex-col sm:h-full'>
							<Inputs
								isTimerOn={isTimerOn}
								toggleTimer={toggleTimer}
								markHighlight={markHighlight}
								reset={reset}
								downloadTimestamps={downloadTimestamps}
							/>
						</div>
						<div className='my-1 sm:my-4 px-3 w-64 sm:w-80 text-center flex justify-center align-middle items-center flex-col'>
							<Timer
								timerOn={isTimerOn}
								addTime={addTime}
								time={time}
							/>
						</div>
						<div
							className='my-1 sm:my-4 px-3 w-64 sm:w-80 text-center border flex justify-start align-middle items-center flex-col 
							overflow-y-scroll min-h-28 h-28 sm:h-full flex-grow sm:flex-grow-0'>
							<Times
								times={times}
								removeTimestamp={removeTimestamp}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
