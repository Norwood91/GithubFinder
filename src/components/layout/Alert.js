import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export default function Alert() {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;
	//alert is getting passed in as a prop
	//if alert isn't set to null, show a div with an icon and message
	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'></i> {alert.msg}
			</div>
		)
	);
}
