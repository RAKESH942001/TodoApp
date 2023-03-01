import { TextField } from '@mui/material';
import React from 'react';
import todoManager from '../../../services/todoManager';

const actionKeys = {
	Enter: (context) => todoManager.onEnterKeyPress(context),
	Escape: (context) => todoManager.onEscKeyPress(context),
};

const TodoInput = (context) => {
	const { state: { todo }, setState } = context;

	return (
		<TextField
			variant="outlined"
			value={ todo.name }
			placeholder="To-Do :)"
			onChange={ ({ target: { value }}) => setState((state) => ({
				...state,
				todo: { ...todo, name: value },
			})) }
			onKeyUp={ ((evt) => actionKeys[evt.code]
				&& actionKeys[evt.code](context)) }
		/>
	);
};

export default TodoInput;
