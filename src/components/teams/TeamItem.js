import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamItem = ({ team }) => {
	// 		    <img src={avatar_url} alt='Avatar' className='round-img' style={{ width: '60px' }} />
	return (
		<div className='card text-center'>
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
