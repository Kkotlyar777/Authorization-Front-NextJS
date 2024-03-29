'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.log(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
		</div>
	);
}
