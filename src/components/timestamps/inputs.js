import React from 'react';

export default function Inputs({
	isTimerOn,
	toggleTimer,
	markHighlight,
	reset,
	downloadTimestamps,
}) {
	const confirm = () => {
		if (
			window.confirm(
				'Are you sure you would like to reset the Timestamp Generator?',
			)
		) {
			reset();
		}
	};
	return (
		<>
			<button
				className='block mx-auto flex-grow border w-11/12 h-11/12 m-2 bg-md-1-700'
				onClick={toggleTimer}>
				<span className='text-white text-2xl'>
					{isTimerOn ? 'Stop Timer' : 'Start Timer'}
				</span>
			</button>

			<button
				className='block mx-auto flex-grow border w-11/12 h-11/12 m-2 bg-md-1-700 disabled:cursor-not-allowed disabled:bg-gray-300 transition-colors'
				onClick={markHighlight}
				disabled={!isTimerOn}>
				<span className='text-white text-2xl'>Mark</span>
			</button>

			<button
				className='block mx-auto flex-grow border w-11/12 h-11/12 m-2 bg-md-1-700 disabled:cursor-not-allowed disabled:bg-gray-300 transition-colors'
				onClick={() => confirm()}
				disabled={isTimerOn}>
				<span className='text-white text-2xl'>Reset</span>
			</button>

			<button
				className='block mx-auto flex-grow border w-11/12 h-11/12 m-2 bg-md-1-700'
				onClick={downloadTimestamps}>
				<span className='text-white text-2xl'>Download Timestamps</span>
			</button>
		</>
	);
}
