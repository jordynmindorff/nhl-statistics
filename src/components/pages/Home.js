import React, { Fragment } from 'react';
import Teams from '../teams/Teams';
import Search from '../players/Search';
import PlayersList from '../players/PlayersList';

const Home = () => {
	return (
		<Fragment>
			<h1>Search Players</h1>
			<Search />
			<PlayersList />
			<h1>View Teams and Rosters</h1>
			<Teams />
		</Fragment>
	);
};

export default Home;
