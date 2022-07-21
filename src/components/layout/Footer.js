import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			&copy; - Jordyn M {new Date().getFullYear()}
			<br />
			Data retrieved from NHL public API.
		</footer>
	);
};

export default Footer;
