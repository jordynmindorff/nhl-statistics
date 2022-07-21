import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlayerItem = ({ player }) => {
	return (
		<div className='card-secondary'>
			<h3>
				<Link to={`/player/${player.person.id}`}>
					{player.person.fullName} - # {player.jerseyNumber} (
					{player.position.abbreviation})
				</Link>
			</h3>
		</div>
	);
};

PlayerItem.propTypes = {
	player: PropTypes.object.isRequired,
};

export default PlayerItem;
