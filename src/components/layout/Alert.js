import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);

	// If we have an alert, display it. Otherwise... don't do anything.
	return alertContext.alert?.message ? (
		<div className={`alert alert-${alertContext.alert.type}`}>
			<i className='fas fa-info-circle'></i> {alertContext.alert.message}
		</div>
	) : null;
};

export default Alert;
