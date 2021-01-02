import { useState, useEffect } from 'react';

export default function useStateSessionStorage(
	localStorageKey,
	defaulatValue,
) {
	const [value, setValue] = useState(
		JSON.parse(sessionStorage.getItem(localStorageKey)) || defaulatValue,
	);
	useEffect(() => {
		sessionStorage.setItem(localStorageKey, JSON.stringify(value));
	}, [value, localStorageKey]);

	return [value, setValue];
}
