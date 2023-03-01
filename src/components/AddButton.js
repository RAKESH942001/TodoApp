import { Box, Button } from '@mui/material';
import React from 'react';
import todoManager from '../services/todoManager';

const AddButton = (context) => {
	const { setState } = context;

	return <Box>
		<Button
			disabled={ !todoManager.isItemThere(context) }
			onClick={ () => setState(() =>
				todoManager.getAddedTodoList(context)) }
		>Add</Button></Box>;
};

export default AddButton;
