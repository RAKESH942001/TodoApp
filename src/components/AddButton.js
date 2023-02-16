import { Button } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const AddButton = (context) => {
	const { setState, state: { tasks }} = context;

	return <div>
		<Button
			onClick={ () => setState((state) => ({
				...state,
				tasks: [...tasks, todoManager.addId(context)],
			})) }
		>Add</Button></div>;
};

export default AddButton;
