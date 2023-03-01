import { Checkbox } from '@mui/material';
import React from 'react';
import todoManager from '../../../services/todoManager';

const SelectAllCheckBox = (context) => {
	const { setState } = context;

	return (
		<Checkbox
			onClick={ () => setState((state) => ({
				...state,
				todos: todoManager
					.getSelectedTodo(context),
			})) }
		/>);
};

export default SelectAllCheckBox;
