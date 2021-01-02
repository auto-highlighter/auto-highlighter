import { useEffect, useCallback } from 'react';
import workerScript from '../../workers/timerWorker';
import Ms from './ms';
import Hhmmss from './hhmmss';

export default function Timer({ timerOn, setTime, time }) {
	const msToIsoString = (ms) => {
		let seconds = Math.floor(ms / 1000);

		let minutes = Math.floor(seconds / 60);
		seconds = seconds % 60;

		let hours = Math.floor(minutes / 60);
		minutes = minutes % 60;

		return `${hours
			.toString()
			.padStart(2, '0')}:${minutes
			.toString()
			.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.`;
	};

	const startWorker = useCallback(() => {
		let timer = new Worker(workerScript);
		timer.postMessage(time);
		timer.onmessage = async (time) => setTime(time.data);
		return timer;
	}, [time, setTime]);

	useEffect(() => {
		if (timerOn) {
			let timer = startWorker();
			return () => timer.terminate();
		}
	}, [timerOn, startWorker]);

	return (
		<>
			<p className='font-time text-6xl w-full sm:w-4/5 inline text-left'>
				<Hhmmss hhmmss={msToIsoString(time)} />
				<Ms ms={Math.floor((time % 1000) / 100)} />
			</p>
		</>
	);
}
