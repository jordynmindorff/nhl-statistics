import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Players from '../players/Players';
import { Link, useMatch } from 'react-router-dom';
import NHLContext from '../../context/nhl/nhlContext';

const Team = () => {
	const nhlContext = useContext(NHLContext);
	const { getTeam, getRoster, team, roster, loading } = nhlContext;

	const match = useMatch('/team/:id');

	useEffect(() => {
		getTeam(match.params.id);
		getRoster(match.params.id);

		// eslint-disable-next-line
	}, []);

	const {
		name,
		id,
		locationName,
		abbreviation,
		venue,
		firstYearOfPlay,
		division,
		conference,
		officialSiteUrl,
	} = team;

	if (loading || !name) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-light'>
				Back to Teams
			</Link>

			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${id}.svg`}
						alt='User Avatar'
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>Location: {locationName}</p>
				</div>
				<div>
					<a href={officialSiteUrl} className='btn btn-dark my-1'>
						Visit Team Page
					</a>
					<ul>
						<li>
							{abbreviation && (
								<Fragment>
									<strong>Team Abbreviation: </strong> {abbreviation}
								</Fragment>
							)}
						</li>
						<li>
							{division && (
								<Fragment>
									<strong>Division: </strong> {division.name}
								</Fragment>
							)}
						</li>
						<li>
							{conference && (
								<Fragment>
									<strong>Conference: </strong> {conference.name}
								</Fragment>
							)}
						</li>
						<li>
							{firstYearOfPlay && (
								<Fragment>
									<strong>First Year of Play: </strong> {firstYearOfPlay}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>

			<div className='card text-center'>
				<div className='badge badge-primary'>
					{venue && <Fragment>Venue Name: {venue.name}</Fragment>}
				</div>
				<div className='badge badge-success'>
					{venue && <Fragment>Venue City: {venue.city}</Fragment>}
				</div>
				<div className='badge badge-light'>
					{venue && <Fragment>Venue Timezone: {venue.timeZone.tz}</Fragment>}
				</div>
			</div>

			<Players players={roster} />
		</Fragment>
	);
};

export default Team;
