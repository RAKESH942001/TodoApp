import { Button } from '@mui/material';
import React from 'react';

const AddButton = (context) => {
	const { setState, state: { inputData, tasks }} = context;

	return <div>
		<Button
			onClick={ () => setState((state) => ({
				...state,
				tasks: [...tasks, { name: inputData }],
			})) }
		>Add</Button></div>;
};

export default AddButton;
