import { useEffect } from 'react';

export default function Timer({ timerOn, addTime, time }) {
	useEffect(() => {
		if (timerOn) {
			const timer = setInterval(() => {
				addTime(10);
			}, 10);
			return () => clearInterval(timer);
		}
	}, [timerOn, addTime]);

	return (
		<p className='font-time text-6xl'>
			{new Date(time).toISOString().slice(11, 21)}
		</p>
	);
}
