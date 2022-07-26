import React from 'react';
import PlayerItem from './PlayerItem';
import PropTypes from 'prop-types';

const Players = ({ players }) => {
	return (
		<div className='grid-3'>
			{players.map((player) => (
				<PlayerItem player={player} key={player.person.id} />
			))}
		</div>
	);
};

Players.propTypes = {
	players: PropTypes.array.isRequired,
};

export default Players;
