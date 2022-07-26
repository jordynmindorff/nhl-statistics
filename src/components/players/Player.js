import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Stats from './Stats';
import { Link, useMatch } from 'react-router-dom';
import NHLContext from '../../context/nhl/nhlContext';
import * as countryIsoConvert from 'country-iso-3-to-2';

const Player = () => {
	const nhlContext = useContext(NHLContext);
	const { getPlayer, player, loading } = nhlContext;

	const match = useMatch('/player/:id');

	useEffect(() => {
		getPlayer(match.params.id);

		// eslint-disable-next-line
	}, []);

	const {
		fullName,
		id,
		primaryNumber,
		birthCountry,
		birthCity,
		birthStateProvince,
		birthDate,
		currentAge,
		active,
		height,
		weight,
		currentTeam,
		primaryPosition,
		stats,
	} = player;

	let countryCode;

	birthCountry && (countryCode = countryIsoConvert(birthCountry).toLowerCase());

	if (loading || !fullName) return <Spinner />;

	return (
		<Fragment>
			{currentTeam ? (
				<Link to={`/team/${currentTeam.id}`} className='btn btn-light'>
					Back to Player Team
				</Link>
			) : (
				<Link to={`/`} className='btn btn-light'>
					Back to Home
				</Link>
			)}
			Active:{' '}
			{active ? (
				<i className='fas fa-check text-success' />
			) : (
				<i className='fas fa-times-circle text-danger' />
			)}
			<div className='card grid-2 all-center'>
				<div className='all-center'>
					<img
						src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}.jpg`}
						className='round-img'
						alt='Player Portrait'
						style={{ width: '150px' }}
					/>
					<h1>{fullName}</h1>
					{currentTeam ? <p>Current Team: {currentTeam.name}</p> : null}
				</div>
				<div>
					<ul>
						<li>
							{primaryPosition && (
								<Fragment>
									<strong>Primary Position: </strong>{' '}
									{primaryPosition.abbreviation}
								</Fragment>
							)}
						</li>
						<li>
							{primaryNumber && (
								<Fragment>
									<strong>Primary Number: </strong> {primaryNumber}
								</Fragment>
							)}
						</li>
						<li>
							{currentAge ? (
								<Fragment>
									<strong>Age (Birth Date): </strong> {currentAge} ({birthDate})
								</Fragment>
							) : (
								<Fragment>
									<strong>Birth Date: </strong>
									{birthDate}
								</Fragment>
							)}
						</li>
						<li>
							{height && (
								<Fragment>
									<strong>Height: </strong> {height}
								</Fragment>
							)}
						</li>
						<li>
							{weight && (
								<Fragment>
									<strong>Weight: </strong> {weight}
								</Fragment>
							)}
						</li>
						<li>
							{birthStateProvince ? (
								<Fragment>
									<strong>Birthplace: </strong> {birthCity}
									{', '}
									{birthStateProvince}
									{', '}
									{birthCountry} <span className={`fi fi-${countryCode}`}></span>
								</Fragment>
							) : (
								<Fragment>
									<strong>Birthplace: </strong> {birthCity}
									{', '}
									{birthCountry} <span className={`fi fi-${countryCode}`}></span>
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<Stats stats={stats} pos={primaryPosition.abbreviation} />
		</Fragment>
	);
};

export default Player;
