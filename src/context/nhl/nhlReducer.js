import { GET_TEAMS, GET_TEAM, GET_ROSTER, GET_PLAYER, SET_LOADING } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case GET_TEAMS:
			return {
				...state,
				teams: action.payload,
				loading: false,
			};

		case GET_TEAM:
			return {
				...state,
				team: action.payload,
				loading: false,
			};

		case GET_ROSTER:
			return {
				...state,
				roster: action.payload,
				loading: false,
			};

		case GET_PLAYER:
			return {
				...state,
				player: action.payload,
				loading: false,
			};

		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default reducer;
