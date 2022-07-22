import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlayerListItem = ({ player: { fullName, id } }) => {
	if (!fullName) return null;

	return (
		<div className='card text-center'>
			<h3>{fullName}</h3>
			<div>
				<Link to={`/player/${id}`} className='btn btn-dark btn-sm my-1'>
					More
				</Link>
			</div>
		</div>
	);
};

PlayerListItem.propTypes = {
	player: PropTypes.object.isRequired,
};

export default PlayerListItem;
