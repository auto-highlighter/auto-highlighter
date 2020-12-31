import React from 'react';

export default function Times({ times, removeTimestamp }) {
	return (
		<>
			{times.map((time, index) => (
				<div className='sm:my-1' key={time + index}>
					<p className='font-time text-2xl mx-2 inline sm:w-24'>
						{new Date(time).toISOString().slice(11, 21)}
					</p>
					<button
						onClick={() => {
							console.count();
							removeTimestamp(index);
						}}>
						<span className='mx-2 text-xl'>❌</span>
					</button>
				</div>
			))}
		</>
	);
}
