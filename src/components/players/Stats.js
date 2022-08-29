import React, { useState, useRef, Fragment } from 'react';
import { formatYearsToSeason } from '../../utils/seasonFormat';

const Stats = ({ stats, pos }) => {
	const [nhlOnly, setNHLOnly] = useState(false);
	const useStats = useRef(stats);

	const checkboxChanged = () => {
		setNHLOnly(nhlOnly ? false : true);
	};

	if (nhlOnly) {
		useStats.current = stats.filter((year) => year.league.name === 'National Hockey League');
	} else {
		useStats.current = stats;
	}

	return (
		<Fragment>
			<input type='checkbox' name='NHL Only' id='' onChange={checkboxChanged} /> NHL Stats
			Only
			{pos !== 'G' ? (
				<div className='table-wrapper'>
					<div className='table-scroll'>
						<table style={tableStyles}>
							<thead>
								<tr>
									<th>Year</th>
									<th>League</th>
									<th>Team</th>
									<th>Games Played</th>
									<th>Goals</th>
									<th>Assists</th>
									<th>Points</th>
									<th>+/-</th>
									<th>PIM</th>
									<th>PPG</th>
									<th>SHG</th>
									<th>GWG</th>
									<th>OTG</th>
									<th>S</th>
									<th>S%</th>
									<th>FO%</th>
								</tr>
							</thead>
							<tbody>
								{useStats.current.map((year, i) => {
									Object.keys(year.stat).forEach((key) => {
										if (year.stat[key] === 0) {
											year.stat[key] = '0';
										}
									});

									return (
										<tr key={i}>
											<td>{formatYearsToSeason(year.season)}</td>
											<td>{year.league.name}</td>
											<td>{year.team.name}</td>
											<td>{year.stat.games}</td>
											<td>{year.stat.goals ? year.stat.goals : '-'}</td>
											<td>{year.stat.assists ? year.stat.assists : '-'}</td>
											<td>{year.stat.points ? year.stat.points : '-'}</td>
											<td>
												{year.stat.plusMinus ? year.stat.plusMinus : '-'}
											</td>
											<td>{year.stat.pim ? year.stat.pim : '-'}</td>
											<td>
												{year.stat.powerPlayGoals
													? year.stat.powerPlayGoals
													: '-'}
											</td>
											<td>
												{year.stat.shortHandedGoals
													? year.stat.shortHandedGoals
													: '-'}
											</td>
											<td>
												{year.stat.gameWinningGoals
													? year.stat.gameWinningGoals
													: '-'}
											</td>
											<td>
												{year.stat.overTimeGoals
													? year.stat.overTimeGoals
													: '-'}
											</td>
											<td>{year.stat.shots ? year.stat.shots : '-'}</td>
											<td>{year.stat.shotPct ? year.stat.shotPct : '-'}</td>
											<td>
												{year.stat.faceOffPct ? year.stat.faceOffPct : '-'}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<div className='table-wrapper'>
					<div className='table-scroll'>
						<table style={tableStyles}>
							<thead>
								<tr>
									<th>Year</th>
									<th>League</th>
									<th>Team</th>
									<th>Games Played</th>
									<th>Starts</th>
									<th>Wins</th>
									<th>Losses</th>
									<th>OTL</th>
									<th>GAA</th>
									<th>SV%</th>
									<th>Shots Against</th>
									<th>Goals Against</th>
									<th>SO</th>
								</tr>
							</thead>
							<tbody>
								{useStats.current.map((year, i) => {
									Object.keys(year.stat).forEach((key) => {
										if (year.stat[key] === 0) {
											year.stat[key] = '0';
										}
									});

									return (
										<tr key={i}>
											<td>{formatYearsToSeason(year.season)}</td>
											<td>{year.league.name}</td>
											<td>{year.team.name}</td>
											<td>{year.stat.games}</td>
											<td>
												{year.stat.gamesStarted
													? year.stat.gamesStarted
													: '-'}
											</td>
											<td>{year.stat.wins ? year.stat.wins : '-'}</td>
											<td>{year.stat.losses ? year.stat.losses : '-'}</td>
											<td>{year.stat.ot ? year.stat.ot : '-'}</td>
											<td>
												{year.stat.savePercentage
													? Math.round(
															(year.stat.goalAgainstAverage +
																Number.EPSILON) *
																100
													  ) / 100
													: '-'}
											</td>
											<td>
												{year.stat.savePercentage
													? Math.round(
															(year.stat.savePercentage +
																Number.EPSILON) *
																1000
													  ) / 1000
													: '-'}
											</td>
											<td>
												{year.stat.shotsAgainst
													? year.stat.shotsAgainst
													: '-'}
											</td>
											<td>
												{year.stat.goalsAgainst
													? year.stat.goalsAgainst
													: '-'}
											</td>
											<td>{year.stat.shutouts ? year.stat.shutouts : '-'}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</Fragment>
	);
};

const tableStyles = {
	margin: '0 auto',
};

export default Stats;
