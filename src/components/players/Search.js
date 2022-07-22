import React, { useState, useContext } from 'react';
import NHLContext from '../../context/nhl/nhlContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const nhlContext = useContext(NHLContext);
	const { searchPlayers, clearPlayers, players } = nhlContext;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === '') {
			return setAlert('Please do not leave the search field blank.', 'light');
		}

		searchPlayers(text);
		setText('');
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Players...'
					value={text}
					onChange={onChange}
				/>
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>

			{players.length > 0 && (
				<button className='btn btn-light btn-block' onClick={clearPlayers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
