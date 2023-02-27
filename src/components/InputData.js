import { Box, Checkbox, TextField } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const InputData = (context) => {
	const { setState, state: { todo }} = context;

	return <Box className="inputData">
		<Checkbox
			onClick={ () => setState((state) => ({ ...state,
				todos: todoManager.getSelectedTodo(context) })) }
		/>
		<TextField
			variant="outlined"
			value={ todo.name }
			placeholder="To-Do :)"
			onChange={ ({ target: { value }}) => setState((state) => ({
				...state,
				todo: { ...todo, name: value },
			})) }
		/>
	</Box>;
};

export default InputData;
