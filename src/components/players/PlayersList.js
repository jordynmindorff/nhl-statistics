import React, { useContext } from 'react';
import PlayerListItem from './PlayerListItem';
import Spinner from '../layout/Spinner';
import NHLContext from '../../context/nhl/nhlContext';

const PlayersList = () => {
	const nhlContext = useContext(NHLContext);
	const { players, loading } = nhlContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className='grid-3'>
				{players.map((player) => {
					return <PlayerListItem key={player.id} player={player} />;
				})}
			</div>
		);
	}
};

export default PlayersList;
