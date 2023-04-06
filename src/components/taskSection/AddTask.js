import { AddTaskOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import todoManager from '../../services/todoManager';

const AddTask = (context) => {
	const { setState, state: { todos }, data } = context;

	return (
		<Box>
			<Button
				onClick={ () => setState(() =>
					setState((state) => ({
						...state,
						todos: [...todos, data],
						tasks: todoManager.removeTask(context),
					}))) }
			><AddTaskOutlined/>
			</Button>
		</Box>
	);
};

export default AddTask;
