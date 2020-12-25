import React from 'react';

export default function Inputs({
	isTimerOn,
	toggleTimer,
	markHighlight,
	reset,
	downloadTimestamps,
}) {
	return (
		<>
			<h1>inputs</h1>

			<button className='block mx-auto' onClick={toggleTimer}>
				<span>{isTimerOn ? 'Stop Timer' : 'Start Timer'}</span>
			</button>

			<button className='block mx-auto' onClick={markHighlight}>
				<span>Mark Highlight</span>
			</button>

			<button className='block mx-auto' onClick={reset}>
				<span>Reset Timestamp Generator</span>
			</button>

			<button className='block mx-auto' onClick={downloadTimestamps}>
				<span>Download Timestamps</span>
			</button>
		</>
	);
}
