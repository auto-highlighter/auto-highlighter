import { useEffect } from 'react';
import workerScript from '../../workers/timerWorker';

export default function Timer({ timerOn, setTime, time }) {
	const msToIsoString = (ms) => {
		let seconds = Math.floor(ms / 1000);
		ms = Math.floor((ms % 1000) / 100);

		let minutes = Math.floor(seconds / 60);
		seconds = seconds % 60;

		let hours = Math.floor(minutes / 60);
		minutes = minutes % 60;

		return `${hours
			.toString()
			.padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}.${ms.toString().padEnd(3, '0')}`;
	};

	useEffect(() => {
		let timer = null;
		if (timerOn) {
			timer = new Worker(workerScript);
			timer.onmessage = async (time) => setTime(time.data);
			return () => timer.terminate();
		}
	}, [timerOn, setTime]);

	return <p className='font-time text-6xl w-full'>{msToIsoString(time)}</p>;
};
