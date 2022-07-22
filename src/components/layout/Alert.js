import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);

	if (alertContext.alert) {
		return (
			alertContext.alert.message && (
				<div className={`alert alert-${alertContext.alert.type}`}>
					<i className='fas fa-info-circle'></i> {alertContext.alert.message}
				</div>
			)
		);
	} else {
		return null;
	}
};

export default Alert;
