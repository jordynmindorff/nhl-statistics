import React, { useEffect, useContext } from 'react';
import TeamItem from './TeamItem';
import Spinner from '../layout/Spinner';
import NHLContext from '../../context/nhl/nhlContext';

const Teams = () => {
	const nhlContext = useContext(NHLContext);
	const { getTeams, teams, loading } = nhlContext;

	useEffect(() => {
		getTeams();

		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={usersStyle}>
				{teams.map((team) => {
					return <TeamItem key={team.id} team={team} />;
				})}
			</div>
		);
	}
};

const usersStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

export default Teams;
