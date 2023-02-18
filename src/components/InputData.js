import { Box, TextField } from '@mui/material';
import React from 'react';

const InputData = (context) => {
	const { setState, state: { inputData }} = context;

	return <Box className="inputData">
		<TextField
			variant="outlined"
			value={ inputData.name }
			placeholder="To-Do :)"
			onChange={ ({ target: { value }}) => setState((state) => ({
				...state,
				inputData: { ...inputData, name: value },
			})) }
		/>
	</Box>;
};

export default InputData;
