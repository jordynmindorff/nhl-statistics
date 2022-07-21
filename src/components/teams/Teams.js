import React, { useEffect, useContext } from 'react';
import TeamItem from './TeamItem';
import Spinner from '../layout/Spinner';
import NHLContext from '../../context/nhl/nhlContext';

const Teams = () => {
	const nhlContext = useContext(NHLContext);
	const { getTeams, teams, loading } = nhlContext;

	useEffect(() => {
		if (teams.length === 0) getTeams();

		// eslint-disable-next-line
	}, []);

	if (loading) return <Spinner />;
	return (
		<div className='grid-3'>
			{teams.map((team) => {
				return <TeamItem key={team.id} team={team} />;
			})}
		</div>
	);
};

export default Teams;
