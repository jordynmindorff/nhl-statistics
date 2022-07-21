import React, { useReducer } from 'react';
import NHLContext from './nhlContext';
import nhlReducer from './nhlReducer';
import { GET_TEAMS, GET_TEAM, GET_ROSTER, GET_PLAYER, SET_LOADING } from '../types';

const NHLState = (props) => {
	const initialState = {
		teams: [],
		team: {},
		roster: [],
		player: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(nhlReducer, initialState);

	// Get All NHL Teams
	const getTeams = async () => {
		setLoading();

		const req = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
		const res = await req.json();

		dispatch({
			type: GET_TEAMS,
			payload: res.teams,
		});
	};

	// Get A Single NHL Team
	const getTeam = async (id) => {
		setLoading();

		const req = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${id}`);
		const res = await req.json();

		dispatch({
			type: GET_TEAM,
			payload: res.teams[0],
		});
	};

	// Get Team Roster
	const getRoster = async (id) => {
		setLoading();

		const req = await fetch(
			`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`
		);
		const res = await req.json();

		dispatch({
			type: GET_ROSTER,
			payload: res.teams[0].roster.roster,
		});
	};

	// Clear Users from State
	const getPlayer = async (id) => {
		setLoading();

		const req = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${id}`);
		const res = await req.json();

		dispatch({
			type: GET_PLAYER,
			payload: res.people[0],
		});
	};

	// Set Loading State
	const setLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	return (
		<NHLContext.Provider
			value={{
				teams: state.teams,
				team: state.team,
				roster: state.roster,
				player: state.player,
				loading: state.loading,
				getTeams,
				getTeam,
				getRoster,
				getPlayer,
				setLoading,
			}}>
			{props.children}
		</NHLContext.Provider>
	);
};

export default NHLState;
