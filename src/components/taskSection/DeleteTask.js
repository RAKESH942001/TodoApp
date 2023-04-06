import React from 'react';
import { Box, Button } from '@mui/material';
import todoManager from '../../services/todoManager';

const DeleteTask = (context) => {
	const { setState } = context;

	return (
		<Box>
			<Button
				className="deleteButton"
				onClick={ () => setState((state) => ({
					...state,
					tasks: todoManager.removeTask(context),
				})) }
				variant="contained"
				color="error"
				size="small"
			>X</Button></Box>);
};

export default DeleteTask;
