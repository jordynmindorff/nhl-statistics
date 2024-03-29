import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<Link to='/'>
				<h1>
					<i className={icon}></i> {title}
				</h1>
			</Link>

			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

// Prop implementation mostly useless for this case, but why not try it out
Navbar.defaultProps = {
	title: 'NHL Statistics',
	icon: 'fas fa-hockey-puck',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
