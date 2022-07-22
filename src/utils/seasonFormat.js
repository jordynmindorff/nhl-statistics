export const formatYearsToSeason = (season) => {
	const sect1 = season.substring(2, 4);
	const sect2 = season.substring(6);

	return `${sect1}-${sect2}`;
};
