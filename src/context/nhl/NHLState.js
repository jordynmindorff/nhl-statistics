import React, { useReducer } from 'react';
import NHLContext from './nhlContext';
import nhlReducer from './nhlReducer';
import {
	GET_TEAMS,
	GET_TEAM,
	GET_ROSTER,
	GET_PLAYER,
	SET_LOADING,
	SEARCH_PLAYERS,
	CLEAR_PLAYERS,
} from '../types';

const NHLState = (props) => {
	const initialState = {
		teams: [],
		team: {},
		roster: [],
		players: [],
		player: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(nhlReducer, initialState);

	// Get All NHL Teams
	const getTeams = async () => {
		setLoading();

		const req = await fetch(
			`${process.env.REACT_APP_PROXY_URL}https://statsapi.web.nhl.com/api/v1/teams`
		);
		const res = await req.json();

		dispatch({
			type: GET_TEAMS,
			payload: res.teams,
		});
	};

	// Get A Single NHL Team
	const getTeam = async (id) => {
		setLoading();

		const req = await fetch(
			`${process.env.REACT_APP_PROXY_URL}https://statsapi.web.nhl.com/api/v1/teams/${id}`
		);
		const res = await req.json();

		dispatch({
			type: GET_TEAM,
			payload: res.teams[0],
		});
	};

	// Get Team Roster (via ID)
	const getRoster = async (id) => {
		setLoading();

		const req = await fetch(
			`${process.env.REACT_APP_PROXY_URL}https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`
		);
		const res = await req.json();

		dispatch({
			type: GET_ROSTER,
			payload: res.teams[0].roster.roster,
		});
	};

	// Get Player Data from NHL API
	const getPlayer = async (id) => {
		setLoading();

		// Basic bio info
		const req = await fetch(
			`${process.env.REACT_APP_PROXY_URL}https://statsapi.web.nhl.com/api/v1/people/${id}`
		);
		const res = await req.json();

		// Statistical info
		const req2 = await fetch(
			`${process.env.REACT_APP_PROXY_URL}https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=yearByYear`
		);
		const res2 = await req2.json();

		res.people[0].stats = res2.stats[0].splits;
		res.people[0].stats = res.people[0].stats.reverse(); //  Reverse for most recent first

		dispatch({
			type: GET_PLAYER,
			payload: res.people[0],
		});
	};

	// Search Players
	const searchPlayers = async (query) => {
		setLoading();

		const req = await fetch(
			`${process.env.REACT_APP_PROXY_URL}https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${query}`
		);
		const res = await req.json();

		const formatted = res.suggestions.map((player) => {
			// deal with weird formatting
			const firstBar = player.indexOf('|');
			const secondBar = player.indexOf('|', firstBar + 1);
			const thirdBar = player.indexOf('|', secondBar + 1);

			return {
				id: Number(player.substring(0, firstBar)),
				fullName:
					player.substring(secondBar + 1, thirdBar) +
					' ' +
					player.substring(firstBar + 1, secondBar),
			};
		});

		dispatch({
			type: SEARCH_PLAYERS,
			payload: formatted,
		});
	};

	// Clear Players from State
	const clearPlayers = async () => {
		dispatch({
			type: CLEAR_PLAYERS,
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
				players: state.players,
				loading: state.loading,
				getTeams,
				getTeam,
				getRoster,
				getPlayer,
				setLoading,
				clearPlayers,
				searchPlayers,
			}}>
			{props.children}
		</NHLContext.Provider>
	);
};

export default NHLState;
