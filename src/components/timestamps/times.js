import React from 'react';

export default React.memo(function Times({ times, setTimes }) {
	const removeTimestamp = (index) => {
		setTimes((times) => {
			let newTimes = [...times];
			newTimes.splice(index, 1);
			return newTimes;
		});
	};

	const msToTime = (time) => {
		let ms = Math.floor(time % 1000)
			.toString()
			.padStart(3, '0');
		let s = (Math.floor(time / 1000) % 60).toString().padStart(2, '0');
		let m = (Math.floor(time / 60000) % 60).toString().padStart(2, '0');
		let h = (Math.floor(time / 600000) % 60).toString().padStart(2, '0');
		return `${h}:${m}:${s}:${ms}`;
	};
	return (
		<>
			{times.map((time, index) => (
				<div className='sm:my-1' key={time + index}>
					<p className='font-time text-2xl mx-2 inline sm:w-24'>
						{msToTime(time)}
					</p>
					<button
						onClick={() => {
							removeTimestamp(index);
						}}>
						<span className='mx-2 text-xl'>❌</span>
					</button>
				</div>
			))}
		</>
	);
});
