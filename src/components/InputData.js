import { Box, TextField } from '@mui/material';
import React from 'react';

const InputData = (context) => {
	const { setState, state: { todo }} = context;

	return <Box className="inputData">
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
