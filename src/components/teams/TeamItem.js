import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamItem = ({ team }) => {
	return (
		<div className='card text-center'>
			<img
				src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`}
				alt='Avatar'
				style={{ width: '60px' }}
			/>

			<h3>
				{team.name} ({team.abbreviation})
			</h3>
			<div>
				<Link to={`/team/${team.id}`} className='btn btn-dark btn-sm my-1'>
					More
				</Link>
			</div>
		</div>
	);
};

TeamItem.propTypes = {
	team: PropTypes.object.isRequired,
};

export default TeamItem;
