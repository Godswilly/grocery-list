import React from 'react';

const Content = () => {
	const handleChange = () => {
		const names = ['Kalu', 'Nasa', 'John'];
		const init = Math.floor(Math.random() * 3);
		return names[init];
	};

	return (
		<>
			<main>
				<p>Hello {handleChange}!!</p>
			</main>
		</>
	);
};

export default Content;
