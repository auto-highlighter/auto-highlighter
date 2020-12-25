import React from 'react';

export default function Times({ times }) {
	return (
		<>
			<h1>times</h1>
			{times.map((time) => (
				<p>{new Date(time).toISOString().slice(11, 21)}</p>
			))}
		</>
	);
}
