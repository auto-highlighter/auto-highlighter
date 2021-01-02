import { useEffect } from 'react';
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

	useEffect(() => {
		let timer = null;
		if (timerOn) {
			timer = new Worker(workerScript);
			timer.onmessage = async (time) => setTime(time.data);
			return () => timer.terminate();
		}
	}, [timerOn, setTime]);

	return (
		<>
			<p className='font-time text-6xl w-full sm:w-4/5 inline text-left'>
				<Hhmmss hhmmss={msToIsoString(time)} />
				<Ms ms={Math.floor((time % 1000) / 100)} />
			</p>
		</>
	);
}
