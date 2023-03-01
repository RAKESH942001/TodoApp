import { Checkbox } from '@mui/material';
import React from 'react';
import todoManager from '../../../services/todoManager';

const CheckBox = (context) => {
	const { setState, data } = context;

	return (
		<Checkbox
			checked={ data.checked }
			onClick={ () => setState((state) => ({
				...state,
				todos: todoManager.getCheckedOrNot(context),
			})) }
		/>);
};

export default CheckBox;
